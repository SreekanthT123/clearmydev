export function ok(res, data = null) {
  return res.json({
    success: true,
    data,
  });
}

export function fail(res, status = 400, message = "Something went wrong") {
  return res.status(status).json({
    success: false,
    error: message,
  });
}
