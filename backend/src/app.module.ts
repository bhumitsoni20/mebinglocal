import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { CompanionsModule } from './modules/companions/companions.module';
import { BookingsModule } from './modules/bookings/bookings.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { ChatModule } from './modules/chat/chat.module';
import { TripsModule } from './modules/trips/trips.module';
import { AiModule } from './modules/ai/ai.module';
import { MapsModule } from './modules/maps/maps.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { NotificationsModule } from './modules/notifications/notifications.module';

@Module({
  imports: [AuthModule, UsersModule, CompanionsModule, BookingsModule, ReviewsModule, ChatModule, TripsModule, AiModule, MapsModule, PaymentsModule, NotificationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
