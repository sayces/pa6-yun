class ApiError extends Error{
  constructor(status, message) {
    super();
    this.status = status
    this.message = message
  }

  static err404(message) {
    return new ApiError(404, message)
  }

  static err500(message) {
    return new ApiError(500, message)
  }
  static err403(message) {
    return new ApiError(403, message)
  }

}

module.exports = ApiError