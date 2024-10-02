class HttpService {
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = `http://localhost:5555${baseUrl}`;
  }

  private async fetch(input: string | URL | globalThis.Request, init?: RequestInit): Promise<Response> {
    if (!init) {
      init = {};
    }

    if (!init.headers) {
      init.headers = {
        "Content-Type": "application/json"
      };
    }

    return await fetch(input, init);
  }

  async get(url: string) {
    const response = await this.fetch(`${this.baseUrl}${url}`);
    if (response.ok) {
      return response.json();
    }
    throw new Error((await response.json()).message);
  }
}

export default HttpService;