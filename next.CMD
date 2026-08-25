@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\Users\Admin\AndroidStudioProjects\school_management_system\school_management_system\node_modules\.pnpm\next@15.5.22_@babel+core@7._e6c5fc237edfe04d43d23f1d07672aa3\node_modules\next\node_modules;C:\Users\Admin\AndroidStudioProjects\school_management_system\school_management_system\node_modules\.pnpm\next@15.5.22_@babel+core@7._e6c5fc237edfe04d43d23f1d07672aa3\node_modules;C:\Users\Admin\AndroidStudioProjects\school_management_system\school_management_system\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\Users\Admin\AndroidStudioProjects\school_management_system\school_management_system\node_modules\.pnpm\next@15.5.22_@babel+core@7._e6c5fc237edfe04d43d23f1d07672aa3\node_modules\next\node_modules;C:\Users\Admin\AndroidStudioProjects\school_management_system\school_management_system\node_modules\.pnpm\next@15.5.22_@babel+core@7._e6c5fc237edfe04d43d23f1d07672aa3\node_modules;C:\Users\Admin\AndroidStudioProjects\school_management_system\school_management_system\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\next\dist\bin\next" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\next\dist\bin\next" %*
)
