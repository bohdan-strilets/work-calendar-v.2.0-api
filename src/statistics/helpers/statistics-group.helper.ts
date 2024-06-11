import { StatisticsFieldsName } from '../enums/statistics-fields-name.enum'

const statisticsGroup = {
	WORKS: [
		StatisticsFieldsName.NUMBER_DAYS_OFF,
		StatisticsFieldsName.NUMBER_VACATION_DAYS,
		StatisticsFieldsName.NUMBER_SICK_DAYS,
		StatisticsFieldsName.NUMBER_ADDITIONAL_WORK_DAYS,
		StatisticsFieldsName.NUMBER_FREE_HOURS,
		StatisticsFieldsName.NUMBER_VACATION_HOURS,
		StatisticsFieldsName.NUMBER_SICK_HOURS,
		StatisticsFieldsName.NUMBER_ADDITIONAL_WORK_HOURS,
		StatisticsFieldsName.NUMBER_FIRST_SHIFTS,
		StatisticsFieldsName.NUMBER_SECOND_SHIFT,
		StatisticsFieldsName.NUMBER_NIGHT_HOURS,
		StatisticsFieldsName.GROSS_AMOUNT_MONEY_FOR_VACATION_DAYS,
		StatisticsFieldsName.NET_AMOUNT_MONEY_FOR_VACATION_DAYS,
		StatisticsFieldsName.GROSS_AMOUNT_MONEY_FOR_SICK_DAYS,
		StatisticsFieldsName.NET_AMOUNT_MONEY_FOR_SICK_DAYS,
	],
	ADDITIONAL_WORK: [
		StatisticsFieldsName.NUMBER_WORK_DAYS,
		StatisticsFieldsName.NUMBER_DAYS_OFF,
		StatisticsFieldsName.NUMBER_VACATION_DAYS,
		StatisticsFieldsName.NUMBER_SICK_DAYS,
		StatisticsFieldsName.NUMBER_FREE_HOURS,
		StatisticsFieldsName.NUMBER_VACATION_HOURS,
		StatisticsFieldsName.NUMBER_SICK_HOURS,
		StatisticsFieldsName.TOTAL_DAYS,
		StatisticsFieldsName.TOTAL_HOURS,
		StatisticsFieldsName.NUMBER_FIRST_SHIFTS,
		StatisticsFieldsName.NUMBER_SECOND_SHIFT,
		StatisticsFieldsName.NUMBER_NIGHT_HOURS,
		StatisticsFieldsName.GROSS_AMOUNT_MONEY_FOR_WORK_DAYS,
		StatisticsFieldsName.NET_AMOUNT_MONEY_FOR_WORK_DAYS,
		StatisticsFieldsName.GROSS_AMOUNT_MONEY_FOR_VACATION_DAYS,
		StatisticsFieldsName.NET_AMOUNT_MONEY_FOR_VACATION_DAYS,
		StatisticsFieldsName.GROSS_AMOUNT_MONEY_FOR_SICK_DAYS,
		StatisticsFieldsName.NET_AMOUNT_MONEY_FOR_SICK_DAYS,
		StatisticsFieldsName.TOTAL_MONEY_EARNED_GROSS,
		StatisticsFieldsName.TOTAL_MONEY_EARNED_NET,
		StatisticsFieldsName.TOTAL_TAX_PAID,
	],
	DAY_OFF: [
		StatisticsFieldsName.NUMBER_WORK_DAYS,
		StatisticsFieldsName.NUMBER_VACATION_DAYS,
		StatisticsFieldsName.NUMBER_SICK_DAYS,
		StatisticsFieldsName.NUMBER_ADDITIONAL_WORK_DAYS,
		StatisticsFieldsName.NUMBER_VACATION_HOURS,
		StatisticsFieldsName.NUMBER_SICK_HOURS,
		StatisticsFieldsName.NUMBER_ADDITIONAL_WORK_HOURS,
		StatisticsFieldsName.TOTAL_DAYS,
		StatisticsFieldsName.TOTAL_HOURS,
		StatisticsFieldsName.NUMBER_FIRST_SHIFTS,
		StatisticsFieldsName.NUMBER_SECOND_SHIFT,
		StatisticsFieldsName.NUMBER_NIGHT_HOURS,
		StatisticsFieldsName.GROSS_AMOUNT_MONEY_FOR_WORK_DAYS,
		StatisticsFieldsName.NET_AMOUNT_MONEY_FOR_WORK_DAYS,
		StatisticsFieldsName.GROSS_AMOUNT_MONEY_FOR_VACATION_DAYS,
		StatisticsFieldsName.NET_AMOUNT_MONEY_FOR_VACATION_DAYS,
		StatisticsFieldsName.GROSS_AMOUNT_MONEY_FOR_SICK_DAYS,
		StatisticsFieldsName.NET_AMOUNT_MONEY_FOR_SICK_DAYS,
		StatisticsFieldsName.TOTAL_MONEY_EARNED_GROSS,
		StatisticsFieldsName.TOTAL_MONEY_EARNED_NET,
		StatisticsFieldsName.TOTAL_TAX_PAID,
	],
	VACATION: [
		StatisticsFieldsName.NUMBER_WORK_DAYS,
		StatisticsFieldsName.NUMBER_DAYS_OFF,
		StatisticsFieldsName.NUMBER_SICK_DAYS,
		StatisticsFieldsName.NUMBER_ADDITIONAL_WORK_DAYS,
		StatisticsFieldsName.NUMBER_FREE_HOURS,
		StatisticsFieldsName.NUMBER_SICK_HOURS,
		StatisticsFieldsName.NUMBER_ADDITIONAL_WORK_HOURS,
		StatisticsFieldsName.NUMBER_FIRST_SHIFTS,
		StatisticsFieldsName.NUMBER_SECOND_SHIFT,
		StatisticsFieldsName.NUMBER_NIGHT_HOURS,
		StatisticsFieldsName.GROSS_AMOUNT_MONEY_FOR_WORK_DAYS,
		StatisticsFieldsName.NET_AMOUNT_MONEY_FOR_WORK_DAYS,
		StatisticsFieldsName.GROSS_AMOUNT_MONEY_FOR_SICK_DAYS,
		StatisticsFieldsName.NET_AMOUNT_MONEY_FOR_SICK_DAYS,
	],
	SICK_LEAVE: [
		StatisticsFieldsName.NUMBER_WORK_DAYS,
		StatisticsFieldsName.NUMBER_DAYS_OFF,
		StatisticsFieldsName.NUMBER_VACATION_DAYS,
		StatisticsFieldsName.NUMBER_ADDITIONAL_WORK_DAYS,
		StatisticsFieldsName.NUMBER_FREE_HOURS,
		StatisticsFieldsName.NUMBER_VACATION_HOURS,
		StatisticsFieldsName.NUMBER_ADDITIONAL_WORK_HOURS,
		StatisticsFieldsName.NUMBER_FIRST_SHIFTS,
		StatisticsFieldsName.NUMBER_SECOND_SHIFT,
		StatisticsFieldsName.NUMBER_NIGHT_HOURS,
		StatisticsFieldsName.GROSS_AMOUNT_MONEY_FOR_WORK_DAYS,
		StatisticsFieldsName.NET_AMOUNT_MONEY_FOR_WORK_DAYS,
		StatisticsFieldsName.GROSS_AMOUNT_MONEY_FOR_VACATION_DAYS,
		StatisticsFieldsName.NET_AMOUNT_MONEY_FOR_VACATION_DAYS,
	],
	FIRST_SHIFT: [
		StatisticsFieldsName.NUMBER_WORK_DAYS,
		StatisticsFieldsName.NUMBER_DAYS_OFF,
		StatisticsFieldsName.NUMBER_VACATION_DAYS,
		StatisticsFieldsName.NUMBER_SICK_DAYS,
		StatisticsFieldsName.NUMBER_ADDITIONAL_WORK_DAYS,
		StatisticsFieldsName.NUMBER_FREE_HOURS,
		StatisticsFieldsName.NUMBER_VACATION_HOURS,
		StatisticsFieldsName.NUMBER_SICK_HOURS,
		StatisticsFieldsName.NUMBER_ADDITIONAL_WORK_HOURS,
		StatisticsFieldsName.TOTAL_DAYS,
		StatisticsFieldsName.TOTAL_HOURS,
		StatisticsFieldsName.NUMBER_SECOND_SHIFT,
		StatisticsFieldsName.NUMBER_NIGHT_HOURS,
		StatisticsFieldsName.GROSS_AMOUNT_MONEY_FOR_WORK_DAYS,
		StatisticsFieldsName.NET_AMOUNT_MONEY_FOR_WORK_DAYS,
		StatisticsFieldsName.GROSS_AMOUNT_MONEY_FOR_VACATION_DAYS,
		StatisticsFieldsName.NET_AMOUNT_MONEY_FOR_VACATION_DAYS,
		StatisticsFieldsName.GROSS_AMOUNT_MONEY_FOR_SICK_DAYS,
		StatisticsFieldsName.NET_AMOUNT_MONEY_FOR_SICK_DAYS,
		StatisticsFieldsName.TOTAL_MONEY_EARNED_GROSS,
		StatisticsFieldsName.TOTAL_MONEY_EARNED_NET,
		StatisticsFieldsName.TOTAL_TAX_PAID,
	],
	SECOND_SHIFT: [
		StatisticsFieldsName.NUMBER_WORK_DAYS,
		StatisticsFieldsName.NUMBER_DAYS_OFF,
		StatisticsFieldsName.NUMBER_VACATION_DAYS,
		StatisticsFieldsName.NUMBER_SICK_DAYS,
		StatisticsFieldsName.NUMBER_ADDITIONAL_WORK_DAYS,
		StatisticsFieldsName.NUMBER_FREE_HOURS,
		StatisticsFieldsName.NUMBER_VACATION_HOURS,
		StatisticsFieldsName.NUMBER_SICK_HOURS,
		StatisticsFieldsName.NUMBER_ADDITIONAL_WORK_HOURS,
		StatisticsFieldsName.TOTAL_DAYS,
		StatisticsFieldsName.TOTAL_HOURS,
		StatisticsFieldsName.NUMBER_FIRST_SHIFTS,
		StatisticsFieldsName.NUMBER_NIGHT_HOURS,
		StatisticsFieldsName.GROSS_AMOUNT_MONEY_FOR_WORK_DAYS,
		StatisticsFieldsName.NET_AMOUNT_MONEY_FOR_WORK_DAYS,
		StatisticsFieldsName.GROSS_AMOUNT_MONEY_FOR_VACATION_DAYS,
		StatisticsFieldsName.NET_AMOUNT_MONEY_FOR_VACATION_DAYS,
		StatisticsFieldsName.GROSS_AMOUNT_MONEY_FOR_SICK_DAYS,
		StatisticsFieldsName.NET_AMOUNT_MONEY_FOR_SICK_DAYS,
		StatisticsFieldsName.TOTAL_MONEY_EARNED_GROSS,
		StatisticsFieldsName.TOTAL_MONEY_EARNED_NET,
		StatisticsFieldsName.TOTAL_TAX_PAID,
	],
	NIGHT_HOURS: [
		StatisticsFieldsName.NUMBER_WORK_DAYS,
		StatisticsFieldsName.NUMBER_DAYS_OFF,
		StatisticsFieldsName.NUMBER_VACATION_DAYS,
		StatisticsFieldsName.NUMBER_SICK_DAYS,
		StatisticsFieldsName.NUMBER_ADDITIONAL_WORK_DAYS,
		StatisticsFieldsName.NUMBER_FREE_HOURS,
		StatisticsFieldsName.NUMBER_VACATION_HOURS,
		StatisticsFieldsName.NUMBER_SICK_HOURS,
		StatisticsFieldsName.NUMBER_ADDITIONAL_WORK_HOURS,
		StatisticsFieldsName.TOTAL_DAYS,
		StatisticsFieldsName.TOTAL_HOURS,
		StatisticsFieldsName.NUMBER_FIRST_SHIFTS,
		StatisticsFieldsName.NUMBER_SECOND_SHIFT,
		StatisticsFieldsName.GROSS_AMOUNT_MONEY_FOR_WORK_DAYS,
		StatisticsFieldsName.NET_AMOUNT_MONEY_FOR_WORK_DAYS,
		StatisticsFieldsName.GROSS_AMOUNT_MONEY_FOR_VACATION_DAYS,
		StatisticsFieldsName.NET_AMOUNT_MONEY_FOR_VACATION_DAYS,
		StatisticsFieldsName.GROSS_AMOUNT_MONEY_FOR_SICK_DAYS,
		StatisticsFieldsName.NET_AMOUNT_MONEY_FOR_SICK_DAYS,
		StatisticsFieldsName.TOTAL_MONEY_EARNED_GROSS,
		StatisticsFieldsName.TOTAL_MONEY_EARNED_NET,
		StatisticsFieldsName.TOTAL_TAX_PAID,
	],
}

export default statisticsGroup