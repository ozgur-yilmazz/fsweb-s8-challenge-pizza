describe('Pizza Sipariş Testi', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/order');
  });

  it('Pizza siparişi verebilmeli', () => {
    // İsim girişi
    cy.get('input[name="name"]').type('Test Kullanıcı');
    
    // Pizza boyutu seçimi (custom div click)
    cy.get('.size-option').contains('Küçük').click();
    
    // Hamur seçimi
    cy.get('select[name="crust"]').select('ince');
    
    // Malzeme seçimi (custom div click)
    cy.get('.ingredient-item').contains('Pepperoni').click();
    cy.get('.ingredient-item').contains('Sosis').click();
    cy.get('.ingredient-item').contains('Domates').click();
    cy.get('.ingredient-item').contains('Mısır').click();
    
    // Sipariş ver butonu
    cy.get('button[type="submit"]').click();
    
    // Başarı sayfasına yönlendirilmeli
    cy.url().should('include', '/success');
    cy.contains('SİPARİŞ ALINDI').should('be.visible');
  });

  it('Form validasyonu çalışmalı', () => {
 
    cy.get('button[type="submit"]').should('be.disabled');
    
    cy.get('input[name="name"]').type('AB');
    cy.get('button[type="submit"]').should('be.disabled');
  });
});