import { useState } from 'react'
import { interactionService } from '../services/interactionService'
import './InteractionForm.css'

/**
 * Componente de formulario para crear nuevas solicitudes de interacción
 */
const InteractionForm = () => {
  const [formData, setFormData] = useState({
    account_id: '',
    canal_origen: 'web',
    payload_texto: ''
  })
  
  const [requestId, setRequestId] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  /**
   * Maneja el cambio en los campos del formulario
   */
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Limpiar errores al cambiar campos
    if (error) setError(null)
    if (requestId) setRequestId(null)
  }

  /**
   * Valida los campos del formulario
   */
  const validateForm = () => {
    if (!formData.account_id.trim()) {
      setError('El ID de cuenta es obligatorio')
      return false
    }
    if (!formData.canal_origen) {
      setError('El canal de origen es obligatorio')
      return false
    }
    if (!formData.payload_texto.trim()) {
      setError('El mensaje es obligatorio')
      return false
    }
    return true
  }

  /**
   * Maneja el envío del formulario
   */
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validar formulario
    if (!validateForm()) {
      return
    }

    setLoading(true)
    setError(null)
    setRequestId(null)

    try {
      const response = await interactionService.createInteraction(formData)
      setRequestId(response.request_id)
      
      // Limpiar formulario después de éxito
      setFormData({
        account_id: '',
        canal_origen: 'web',
        payload_texto: ''
      })
    } catch (err) {
      setError(err.message || 'Error al enviar la solicitud. Por favor, intente nuevamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="interaction-form-container">
      <form className="interaction-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="account_id">
            ID de Cuenta <span className="required">*</span>
          </label>
          <input
            type="text"
            id="account_id"
            name="account_id"
            value={formData.account_id}
            onChange={handleChange}
            placeholder="Ingrese el ID de cuenta del cliente"
            disabled={loading}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="canal_origen">
            Canal de Origen <span className="required">*</span>
          </label>
          <select
            id="canal_origen"
            name="canal_origen"
            value={formData.canal_origen}
            onChange={handleChange}
            disabled={loading}
            required
          >
            <option value="web">Portal Web</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="email">Correo Electrónico</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="payload_texto">
            Mensaje <span className="required">*</span>
          </label>
          <textarea
            id="payload_texto"
            name="payload_texto"
            value={formData.payload_texto}
            onChange={handleChange}
            placeholder="Describa su solicitud de asistencia técnica o financiera"
            rows="5"
            disabled={loading}
            required
          />
        </div>

        {error && (
          <div className="error-message" role="alert">
            {error}
          </div>
        )}

        {requestId && (
          <div className="success-message" role="alert">
            <strong>¡Solicitud creada exitosamente!</strong>
            <p>Request ID: <code>{requestId}</code></p>
          </div>
        )}

        <button 
          type="submit" 
          className="submit-button"
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar Solicitud'}
        </button>
      </form>
    </div>
  )
}

export default InteractionForm

