import 'package:dedicated_ip/bloc/app/app_bloc.dart';
import 'package:dedicated_ip/bloc/bloc_observer.dart';
import 'package:dedicated_ip/helpers/constants.dart';
import 'package:dedicated_ip/repositories/authentication_repository.dart';
import 'package:dedicated_ip/screens/home_screen.dart';
import 'package:dedicated_ip/screens/onboarding_screen.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:get/get.dart';
import 'package:sentry_flutter/sentry_flutter.dart';


import 'helpers/pref.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  //enter full-screen
  SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersive);

  //for setting orientation to portrait only
  await SystemChrome.setPreferredOrientations(
      [DeviceOrientation.portraitUp, DeviceOrientation.portraitDown]);

  Bloc.observer = const AppBlocObserver();


  await Firebase.initializeApp();

  await Pref.initializeHive();

  final authenticationRepository = AuthenticationRepository();
  await authenticationRepository.user.first;

  await SentryFlutter.init(
    (options) {
      options.dsn =
          'https://1fc152a80765b9306b398ba2d7d17f66@o4508776880209920.ingest.de.sentry.io/4508777507979344';
      options.tracesSampleRate = 0.1;
      options.profilesSampleRate = 0.1;
    },
    appRunner: () async => {
      runApp(
        SentryWidget(
          child: BlocProvider<AppBloc>(
            create: (context) => AppBloc(authenticationRepository: authenticationRepository),
            child: RepositoryProvider(create: (context) => authenticationRepository,child: const MyApp(),),
          ),
        ),
      ),
    },
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: Constants.appName,
      home: BlocBuilder<AppBloc, AppState>(
        builder: (context, state) {
          if ( state.status == AppStatus.unauthenticated) {
            return const OnboardingScreen();
          } else {
            return const HomeScreen();
          }
        },
      ),

      themeMode: ThemeMode.dark,

      //dark theme
      darkTheme: Constants.darkTheme(context),
      debugShowCheckedModeBanner: false,
    );
  }
}
