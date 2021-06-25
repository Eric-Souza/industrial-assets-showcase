import tractianApi from '../api'

export async function getCompanies() {
  const companies = await tractianApi.get('/companies')

  return companies
}

export async function getCompanyById(id: number) {
  const company = await tractianApi.get(`/companies/${id}`)

  return company
}
