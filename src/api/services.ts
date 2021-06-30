import tractianApi from './api'

// Assets
export async function getAssets() {
  const assets = await tractianApi.get('/assets')

  return assets
}

export async function getAssetById(id: number) {
  const asset = await tractianApi.get(`/assets/${id}`)

  return asset
}

// Companies
export async function getCompanies() {
  const companies = await tractianApi.get('/companies')

  return companies
}

export async function getCompanyById(id: number) {
  const company = await tractianApi.get(`/companies/${id}`)

  return company
}

// Units
export async function getUnits() {
  const units = await tractianApi.get('/units')

  return units
}

export async function getUnitById(id: number) {
  const unit = await tractianApi.get(`/units/${id}`)

  return unit
}

// Users
export async function getUsers() {
  const users = await tractianApi.get('/users')

  return users
}

export async function getUserById(id: number) {
  const user = await tractianApi.get(`/users/${id}`)

  return user
}
