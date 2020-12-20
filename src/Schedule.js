import parser from "cron-parser";

const options = {
  utc: true,
};

export function getNextExecutions(cron, num) {
  if (num <= 0) return [];

  let result = [];

  try {
    let interval = parser.parseExpression(cron, options);

    result.push({
      executionDate: interval.prev().toDate(),
      startDate: interval.next().toDate(),
    });

    for (let i = 1; i < num; i++) {
      result.push({
        executionDate: result[result.length - 1].startDate,
        startDate: interval.next().toDate(),
      });
    }
  } catch (err) {
    throw "Invalid CRON expression: " + err.message;
  }

  return result;
}
