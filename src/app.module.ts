import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypegooseModule } from 'nestjs-typegoose'
import { AuthModule } from './auth/auth.module'
import { getMongoConfig } from './config/mongo.config'
import { UserModule } from './user/user.module'
import { SendgridModule } from './sendgrid/sendgrid.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { PasswordModule } from './password/password.module';
import { CompanyModule } from './company/company.module';
import { VacationModule } from './vacation/vacation.module';
import { CalendarModule } from './calendar/calendar.module';
import { TodosModule } from './todos/todos.module';
import { StatisticsModule } from './statistics/statistics.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypegooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoConfig,
		}),
		AuthModule,
		UserModule,
		SendgridModule,
		CloudinaryModule,
		PasswordModule,
		CompanyModule,
		VacationModule,
		CalendarModule,
		TodosModule,
		StatisticsModule,
	],
})
export class AppModule {}
