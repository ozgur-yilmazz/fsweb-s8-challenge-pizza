import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Button, 
  Container, 
  FormText
} from 'reactstrap';
import axios from 'axios';
import './PizzaForm.css';

const PizzaForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    size: '',
    crust: '', // Hamur seçimi
    ingredients: [],
    notes: '',
    quantity: 1
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableIngredients = [
    'Pepperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan', 'Domates', 
    'Mısır', 'Sucuk', 'Jalepeno', 'Sarımsak', 'Biber', 'Ananas', 'Kabak'
  ];

  const pizzaSizes = [
    { value: 'small', label: 'Küçük', price: 85.50 },
    { value: 'medium', label: 'Orta', price: 95.50 },
    { value: 'large', label: 'Büyük', price: 105.50 }
  ];

  const crustOptions = [
    { value: 'ince', label: 'İnce' },
    { value: 'kalın', label: 'Kalın' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleIngredientChange = (ingredient) => {
    const isSelected = formData.ingredients.includes(ingredient);
    let newIngredients;
    
    if (isSelected) {
      newIngredients = formData.ingredients.filter(item => item !== ingredient);
    } else {
      newIngredients = [...formData.ingredients, ingredient];
    }
    
    setFormData(prev => ({
      ...prev,
      ingredients: newIngredients
    }));
    
    // Clear ingredient error
    if (errors.ingredients) {
      setErrors(prev => ({
        ...prev,
        ingredients: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation (min 3 characters)
    if (!formData.name || formData.name.trim().length < 3) {
      newErrors.name = 'İsim en az 3 karakter olmalıdır';
    }
    
    // Size validation
    if (!formData.size) {
      newErrors.size = 'Pizza boyutu seçmelisiniz';
    }
    
    // Crust validation
    if (!formData.crust) {
      newErrors.crust = 'Hamur seçimi yapmalısınız';
    }
    
    // Ingredients validation (4-10 items)
    if (formData.ingredients.length < 4) {
      newErrors.ingredients = 'En az 4 malzeme seçmelisiniz';
    } else if (formData.ingredients.length > 10) {
      newErrors.ingredients = 'En fazla 10 malzeme seçebilirsiniz';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const orderData = {
        name: formData.name.trim(),
        size: formData.size,
        crust: formData.crust,
        ingredients: formData.ingredients,
        notes: formData.notes.trim(),
        quantity: formData.quantity,
        total: calculateTotal(),
        timestamp: new Date().toISOString()
      };
      
      console.log('Gönderilen sipariş verisi:', orderData);
      
      const response = await axios.post('https://reqres.in/api/pizza', orderData, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'reqres-free-v1'
        }
      });
      
      console.log('API Yanıtı:', response.data);
      console.log('Sipariş Özeti:', {
        ...response.data,
        message: 'Siparişiniz başarıyla alındı!'
      });
      
      // Form'u temizle
      setFormData({
        name: '',
        size: '',
        crust: '',
        ingredients: [],
        notes: '',
        quantity: 1
      });
      
      // SuccessPage'e sipariş verileri ile yönlendir
      history.push('/success', {
        orderData: {
          ...response.data,
          pizzaName: "Position Absolute Acı Pizza",
          originalData: orderData,
          message: 'Siparişiniz başarıyla alındı!'
        }
      });
      
    } catch (error) {
      console.error('Sipariş gönderimi hatası:', error);
      alert('Sipariş gönderilirken bir hata oluştu.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return formData.name.trim().length >= 3 &&
           formData.size &&
           formData.crust &&
           formData.ingredients.length >= 4 &&
           formData.ingredients.length <= 10;
  };

  const calculateTotal = () => {
    const selectedSize = pizzaSizes.find(size => size.value === formData.size);
    const basePrice = selectedSize ? selectedSize.price : 0;
    const ingredientPrice = formData.ingredients.length * 5;
    return (basePrice + ingredientPrice) * formData.quantity;
  };

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      {/* Pizza Görseli ve Breadcrumb */}
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        <img 
          src="/public/images/iteration-2-images/pictures/form-banner.png" 
          alt="Position Absolute Acı Pizza" 
          style={{ width: '100%', maxWidth: '600px', marginBottom: '2rem' }}
        />
        
        <div style={{ color: '#666', fontSize: '1rem', marginBottom: '2rem' }}>
          Anasayfa - Seçenekler - <span style={{ color: '#CE2829', fontWeight: 'bold' }}>Sipariş Oluştur</span>
        </div>
        
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>
          Position Absolute Acı Pizza
        </h1>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', margin: 0 }}>
            {calculateTotal().toFixed(2)}₺
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>4.9</span>
            <span style={{ color: '#666' }}>(200)</span>
          </div>
        </div>
        
        <p style={{ 
          color: '#666', 
          fontSize: '1rem', 
          lineHeight: '1.6', 
          maxWidth: '800px', 
          margin: '0 auto 2rem auto',
          textAlign: 'left',
          padding: '0 2rem'
        }}>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. 
          Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra 
          geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle 
          yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli 
          bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>
      
      <Container className="pizza-form-container py-4">
        <div className="pizza-form-card">
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1.2rem' }}>4.9</span>
            <span>(200)</span>
          </div>
          
          <p className="text-muted mb-4">
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. 
            Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra 
            geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle 
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli 
            bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
          </p>
          
          <Form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
              {/* Boyut Seç */}
              <div style={{ flex: 1 }}>
                <Label className="form-label h6 mb-3">Boyut Seç *</Label>
                <div className="size-options">
                  {pizzaSizes.map(size => (
                    <div
                      key={size.value}
                      className={`size-option ${formData.size === size.value ? 'selected' : ''}`}
                      onClick={() => setFormData(prev => ({ ...prev, size: size.value }))}
                    >
                      <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{size.label}</div>
                    </div>
                  ))}
                </div>
                {errors.size && (
                  <FormText color="danger">{errors.size}</FormText>
                )}
              </div>

              {/* Hamur Seç */}
              <div style={{ flex: 1 }}>
                <Label className="form-label h6 mb-3">Hamur Seç *</Label>
                <Input
                  type="select"
                  name="crust"
                  value={formData.crust}
                  onChange={handleInputChange}
                  invalid={!!errors.crust}
                  style={{ padding: '0.75rem' }}
                >
                  <option value="">Hamur Kalınlığı</option>
                  {crustOptions.map(crust => (
                    <option key={crust.value} value={crust.value}>
                      {crust.label}
                    </option>
                  ))}
                </Input>
                {errors.crust && (
                  <FormText color="danger">{errors.crust}</FormText>
                )}
              </div>
            </div>

            {/* Ek Malzemeler */}
            <FormGroup className="mb-4">
              <Label className="form-label h6 mb-3">Ek Malzemeler</Label>
              <p className="text-muted small mb-3">En fazla 10 malzeme seçebilirsiniz. 5₺</p>
              <div className="ingredients-grid">
                {availableIngredients.map(ingredient => (
                  <div
                    key={ingredient}
                    className={`ingredient-item ${formData.ingredients.includes(ingredient) ? 'selected' : ''}`}
                    onClick={() => handleIngredientChange(ingredient)}
                  >
                    <div className="ingredient-checkbox"></div>
                    <span>{ingredient}</span>
                  </div>
                ))}
              </div>
              {errors.ingredients && (
                <FormText color="danger">{errors.ingredients}</FormText>
              )}
            </FormGroup>

            {/* İsim */}
            <FormGroup className="mb-4">
              <Label for="name" className="form-label h6">İsim</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                invalid={!!errors.name}
                placeholder="İsminizi giriniz"
                style={{ padding: '0.75rem' }}
              />
              {errors.name && (
                <FormText color="danger">{errors.name}</FormText>
              )}
            </FormGroup>

            {/* Sipariş Notu */}
            <FormGroup className="mb-4">
              <Label for="notes" className="form-label h6">Sipariş Notu</Label>
              <Input
                type="textarea"
                name="notes"
                id="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
                rows={3}
                style={{ padding: '0.75rem' }}
              />
            </FormGroup>

            {/* Alt Kısım - Miktar ve Toplam */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              {/* Miktar Kontrolü */}
              <div className="quantity-controls">
                <Button 
                  type="button" 
                  color="warning" 
                  size="sm"
                  onClick={() => setFormData(prev => ({ ...prev, quantity: Math.max(1, prev.quantity - 1) }))}
                >
                  -
                </Button>
                <span style={{ 
                  backgroundColor: '#FDC913', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '4px',
                  fontWeight: 'bold' 
                }}>
                  {formData.quantity}
                </span>
                <Button 
                  type="button" 
                  color="warning" 
                  size="sm"
                  onClick={() => setFormData(prev => ({ ...prev, quantity: prev.quantity + 1 }))}
                >
                  +
                </Button>
              </div>
              
              {/* Sipariş Ver Butonu */}
              <Button 
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                className="submit-btn"
                style={{ width: 'auto', padding: '0.75rem 2rem' }}
              >
                {isSubmitting ? 'Gönderiliyor...' : 'SİPARİŞ VER'}
              </Button>
            </div>

            {/* Sipariş Toplamı */}
            <div className="pizza-order-total">
              <h6 className="mb-3">Sipariş Toplamı</h6>
              <div className="d-flex justify-content-between mb-2">
                <span>Seçimler</span>
                <span className="text-danger">{(formData.ingredients.length * 5 * formData.quantity).toFixed(2)}₺</span>
              </div>
              <div className="d-flex justify-content-between" style={{ fontWeight: 'bold' }}>
                <span>Toplam</span>
                <span className="text-danger">{calculateTotal().toFixed(2)}₺</span>
              </div>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default PizzaForm;