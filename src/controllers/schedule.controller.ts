import { scheduleService, userService } from '../services';
import logger from '../helpers/logger';
import { mailController } from './mail.controller';

// export const startSecondsJob = scheduleService.startEverySecond(() => logme());
// export const startEveryMinuteJob = scheduleService.startEveryMinute(() => payHourlySalaries());
// export const startHourlyJob = scheduleService.startHourly(() => payHourlySalaries());
// export const startDailyJob = scheduleService.startDaily(() => payDailySalaries());
// export const startWeeklyJob = scheduleService.startWeekly(() => payWeeklySalaries());
// export const startMonthlyJob = scheduleService.startMonthly(() => payMonthlySalaries());
// export const startYearlyJob = scheduleService.startYearly(() => payYearlySalaries());

// Helper function to pay salaries based on time interval
async function paySalaries(intervalInHours: number, timeUnit: string) {
  
}

function sayHello() {
  console.log('Hello at', Date.now());
}

class Controller {
  startEverySecond() {
    const startEverySecond = scheduleService.startEverySecond(async () => {
      // await paySalaries(1, 'hour');
      sayHello();
    });
  }

  startEveryMinute() {
    const startEveryMinuteJob = scheduleService.startEveryMinute(async () => {
      await paySalaries(1, 'hourly');
    });
  }

  startEvery10thMinute() {
    const startEvery10Minute = scheduleService.startEvery10thMinute(() => {
      sayHello();
    });
  }

  startEvery30thMinute() {
    const startEvery30Minute = scheduleService.startEvery30thMinute(() => {
      sayHello();
    });
  }

  startHourlyJobs() {
    const startHourlyJob = scheduleService.startHourly(async () => {
      await paySalaries(1, 'hourly');
    });
  }

  startDailyJobs() {
    const startDailyJob = scheduleService.startDaily(async () => {
      await paySalaries(24, 'daily');
    });
  }

  startWeeklyJobs() {
    const startWeeklyJob = scheduleService.startWeekly(async () => {
      await paySalaries(168, 'weekly');
    });
  }

  startMonthlyJobs() {
    const startMonthlyJob = scheduleService.startMonthly(async () => {
      await paySalaries(720, 'monthly');
    });
  }

  startYearlyJobs() {
    const startYearlyJob = scheduleService.startYearly(async () => {
      await paySalaries(8760, 'yearly');
    });
  }
}

export const scheduleController = new Controller();
