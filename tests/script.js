import http from 'k6/http';
import { sleep, check } from 'k6';
export const options = {
  vus: 100,
  duration: '15s',
};


export default function () {
  let randomID = Math.floor(Math.random() * (1000000));
  let requestParam = {
    params: {
   "product_id": randomID
  }
}
  let res = http.get(`http://localhost:3000/qa/questions`, requestParam);
  sleep(1);
  check(res, {
    'is status 200': r => r.status === 200,
    'Return time < 75ms': r => r.timings.duration < 75,
    'Return time < 100ms': r => r.timings.duration < 100,
    'Return time < 125ms': r => r.timings.duration < 125,
    'Return time < 150ms': r => r.timings.duration < 150,
    'Return time < 1275ms': r => r.timings.duration < 175,
    'Return time < 200ms': r => r.timings.duration < 200,
    'Return time < 250ms': r => r.timings.duration < 250,
    'Return time < 300ms': r => r.timings.duration < 300,
    'Return time < 350ms': r => r.timings.duration < 350,
    'Return time < 500ms': r => r.timings.duration < 500,
    'Return time < 600ms': r => r.timings.duration < 600
  })
}