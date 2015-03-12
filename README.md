# An Example App Using Ionic Framework App With Pre-Filled SQLite DB  

Install ionic

`npm install -g cordova ionic`

Start a project

`ionic start myapp tabs`

Install ngcordova http://ngcordova.com/docs/install/

`bower install ngCordova`


##  SQLitePlugin


https://github.com/Antair/Cordova-SQLitePlugin
http://www.phonegapspain.com/topic/usar-bd-sqlite-ya-existente/

`cordova plugin add  https://github.com/Antair/Cordova-SQLitePlugin.git`


## Add android , build emulate

```
ionic platform add  android
ionic build android 
```

Logging android debugger
* https://blog.nraboy.com/2014/12/debugging-android-source-code-adb/
* http://blog.koalite.com/2012/09/depurar-phonegapcordova-en-android-con-adb/

`adb logcat Cordova:D DroidGap:D CordovaLog:D *:S`




## References 

* http://docs.phonegap.com/en/edge/cordova_storage_sqlresultset_sqlresultset.md.html
* Deploy Ionic Framework App With Pre-Filled SQLite DB  https://blog.nraboy.com/2015/01/deploy-ionic-framework-app-pre-filled-sqlite-db/
* Ionic / AngularJS service wrapper for Web SQL API / SQLite-Cordova-Plugin  https://gist.github.com/jgoux/10738978
* http://forum.ionicframework.com/t/factory-wrapper-for-sqlite-plugin/2759/19
* https://blog.nraboy.com/2014/11/use-sqlite-instead-local-storage-ionic-framework/
* http://ngcordova.com/docs/plugins/sqlite/
* https://github.com/brodysoft/Cordova-SQLitePlugin
* ionic using Cordova-SQLitePlugin with service / factory. https://gist.github.com/borissondagh/29d1ed19d0df6051c56f  (A merge of https://blog.nraboy.com/2014/11/use-sqlite-instead-local-storage-ionic-framework/  and https://gist.github.com/jgoux/10738978 )



