function runCommand() {
    var shell = new ActiveXObject("command.exe");
    shell.Run("execute.bat", 1, false);
}
