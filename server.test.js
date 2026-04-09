// Before
test('GET / returns ok', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe('ok');
});

// After
test('GET /api returns ok', async () => {
  const res = await request(app).get('/api');
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe('ok');
});