import config from '../config'

export const status = async (_, res) => {
  res.status(200).json({ status: '🔥🔥🔥 API Working 100%' })
}
