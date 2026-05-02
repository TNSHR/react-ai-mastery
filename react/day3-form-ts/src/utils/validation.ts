import type { FormData, FormErrors } from "../types/form.types"

export const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {}

  if (!data.email) {
    errors.email = "Email is required"
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Invalid email format"
  }

  if (!data.password) {
    errors.password = "Password is required"
  } else if (data.password.length < 6) {
    errors.password = "Password must be at least 6 characters"
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "Confirm your password"
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords do not match"
  }

  return errors
}

export const getPasswordStrength = (password: string): string => {
  if (password.length === 0) return ""
  if (password.length < 6) return "Weak"
  if (password.length < 10) return "Medium"
  return "Strong"
}