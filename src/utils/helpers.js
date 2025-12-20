/**
 * Вспомогательные функции
 */

/**
 * Форматирует телефонный номер
 * @param {string} phone - Номер телефона
 * @returns {string} Отформатированный номер
 */
export const formatPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 11) {
    return `+${cleaned[0]} (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9)}`
  }
  return phone
}

/**
 * Валидация email
 * @param {string} email - Email адрес
 * @returns {boolean} Валидный ли email
 */
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

/**
 * Валидация телефона
 * @param {string} phone - Номер телефона
 * @returns {boolean} Валидный ли телефон
 */
export const validatePhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '')
  return cleaned.length >= 10
}

/**
 * Обрезка текста до определенной длины
 * @param {string} text - Текст для обрезки
 * @param {number} maxLength - Максимальная длина
 * @returns {string} Обрезанный текст
 */
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

