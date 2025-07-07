export class FireRate {
  private duration: number
  private count: number = 0
  private callback: () => void = () => void 0

  constructor(duration?: number) {
    this.duration = duration || 100
  }

  public queue(callback: () => void, duration?: number) {
    this.callback = callback
    this.increase()
    setTimeout(() => this.handleCall(), duration || this.duration)
  }

  private lastcall = 0
  private handleCall() {
    const gap = new Date().getTime() - this.lastcall
    if (gap >= this.duration || this.decrease() === 0) {
      this.callback()
      this.lastcall = new Date().getTime()
    }
  }

  private increase() {
    this.count += 1
  }

  private decrease() {
    this.count -= 1
    return this.count
  }
}
