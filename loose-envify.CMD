@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\Users\Admin\AndroidStudioProjects\school_management_system\school_management_system\nooha-labs\website\node_modules\loose-envify\node_modules;C:\Users\Admin\AndroidStudioProjects\school_management_system\school_management_system\nooha-labs\website\node_modules;C:\Users\Admin\AndroidStudioProjects\school_management_system\school_management_system\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\Users\Admin\AndroidStudioProjects\school_management_system\school_management_system\nooha-labs\website\node_modules\loose-envify\node_modules;C:\Users\Admin\AndroidStudioProjects\school_management_system\school_management_system\nooha-labs\website\node_modules;C:\Users\Admin\AndroidStudioProjects\school_management_system\school_management_system\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\loose-envify\cli.js" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\loose-envify\cli.js" %*
)
