import { Module } from "@nestjs/common";
import { SpellBookModule } from "./spellBook/spellBook.module";
import { RitualModule } from "./ritual/ritual.module";
import { JournalModule } from "./journal/journal.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { ContactModule } from "./contact/contact.module";
import { SettingsModule } from "./settings/settings.module";
import { TarotReadingModule } from "./tarotReading/tarotReading.module";
import { TarotSpreadModule } from "./tarotSpread/tarotSpread.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    SpellBookModule,
    RitualModule,
    JournalModule,
    DashboardModule,
    ContactModule,
    SettingsModule,
    TarotReadingModule,
    TarotSpreadModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
