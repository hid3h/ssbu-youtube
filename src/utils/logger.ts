type Severity = "DEBUG" | "INFO" | "WARNING" | "ERROR" | "ALERT"

type Payload = { [key: string]: any }

export class Logger {
  static output(severity: Severity, payload: Payload, error?: Error) {
    const entry: any = {
      severity,
      ...payload,
    }
    if (error) {
      entry.errorMessage = error.message
      entry.errorName = error.name
    }
    console.log(JSON.stringify(entry))
  }
}
