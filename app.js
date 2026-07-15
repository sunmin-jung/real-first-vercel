// '보내기' 버튼에 클릭 동작 연결
document.getElementById('btn').addEventListener('click', () => {
  // id="q" 입력칸에 적은 질문 꺼내기
  const prompt = document.getElementById('q').value

  // 내 서버(프록시) 창구로 요청 (키 없음)
  fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  })
    // 응답을 객체로 변환
    .then(res => res.json())
    // 받은 답(reply)을 id="ans" 자리에 표시
    .then(data => { document.getElementById('ans').textContent = data.reply || data.error })
    // 서버가 안 켜져 있으면 안내 메시지
    .catch(() => { document.getElementById('ans').textContent = '❌ 서버 안 켜짐? (server서 node index.js 먼저)' })
})
