import tractianApi from '../api'

export async function getAssets() {
  const assets = await tractianApi.get('/assets')

  return assets
}

export async function getAssetById(id: number) {
  const asset = await tractianApi.get(`/assets/${id}`)

  return asset
}
