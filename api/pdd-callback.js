// api/pdd-callback.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    // 打印接收到的数据用于调试
    console.log('Received data:', req.body);
    
    // 必须返回拼多多要求的格式
    return res.status(200).json({
      code: 0,
      message: 'success'
    });
  }

  return res.status(405).end(); // 只允许POST请求
}
