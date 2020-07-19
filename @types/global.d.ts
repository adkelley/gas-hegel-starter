declare namespace NodeJS {
    interface Global {
        doGet(
            e: GoogleAppsScript.Events.AppsScriptHttpRequestEvent
        ): GoogleAppsScript.HTML.HtmlOutput | GoogleAppsScript.Content.TextOutput | void
        doPost(
            e: GoogleAppsScript.Events.AppsScriptHttpRequestEvent
        ): GoogleAppsScript.HTML.HtmlOutput | GoogleAppsScript.Content.TextOutput | void
    }
}
