export type APIFunction<
  RequestParams = Record<string, unknown>,
  ResponseTypeMapped = Record<string, unknown>,
> = (requestParams: RequestParams) => Promise<ResponseTypeMapped>;

export type APIFunctionNoParams<ResponseTypeMapped = Record<string, unknown>> =
  () => Promise<ResponseTypeMapped>;
