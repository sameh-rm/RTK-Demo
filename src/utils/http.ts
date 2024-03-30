export function sendBeacon(url: string, data: any) {
  data = JSON.stringify({
    ...(typeof data === 'string' ? { data } : { ...data })
  });
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
    type: 'application/json'
  };
  const blob = new Blob([data], headers);

  navigator.sendBeacon(url, blob);
}
