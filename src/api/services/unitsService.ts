import tractianApi from '../api'

export async function getUnits() {
  const units = await tractianApi.get('/units')

  return units
}

export async function getUnitById(id: number) {
  const unit = await tractianApi.get(`/units/${id}`)

  return unit
}
