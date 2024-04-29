class RawPostDataLoggerMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        if response.status_code == 400:
            print(f"Bad Request Response: {response.content.decode('utf-8')}")
        return response
