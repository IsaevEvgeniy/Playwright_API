export enum STATUS_MESSAGE {
  CONTINUE = 'Continue with the request body',
  SWITCHING_PROTOCOLS = 'Protocol switching initiated',
  PROCESSING = 'Request is being processed',
  EARLY_HINTS = 'Early response hints provided',

  OK = 'Request succeeded',
  CREATED = 'Resource created successfully',
  ACCEPTED = 'Request accepted for asynchronous processing',
  NON_AUTHORITATIVE_INFORMATION = 'Transformed response received',
  NO_CONTENT = 'Request processed successfully with no response body',
  RESET_CONTENT = 'Reset document view required',

  MULTIPLE_CHOICES = 'Multiple representations available',
  MOVED_PERMANENTLY = 'Resource permanently relocated',
  FOUND = 'Resource temporarily available elsewhere',
  SEE_OTHER = 'Refer to different URI for response',
  NOT_MODIFIED = 'Resource unchanged since last request',
  USE_PROXY = 'Access via specified proxy required',

  BAD_REQUEST = 'Malformed request syntax',
  UNAUTHORIZED = 'Authentication credentials required',
  PAYMENT_REQUIRED = 'Payment necessary for access',
  FORBIDDEN = 'Insufficient access privileges',
  NOT_FOUND = 'Requested resource unavailable',
  METHOD_NOT_ALLOWED = 'HTTP method not permitted for this endpoint',

  INTERNAL_SERVER_ERROR = 'Internal server malfunction',
  NOT_IMPLEMENTED = 'Requested functionality unsupported',
  BAD_GATEWAY = 'Invalid upstream server response',
  SERVICE_UNAVAILABLE = 'Server temporarily overloaded or under maintenance',
  GATEWAY_TIMEOUT = 'Upstream server response timeout',
}
