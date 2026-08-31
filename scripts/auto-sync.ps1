$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $ProjectRoot

$CheckInterval = 60
$QuietPeriod = 300

Write-Host ""
Write-Host "========================================" -ForegroundColor Magenta
Write-Host "   SPARSH PORTFOLIO - SMART GIT SYNC" -ForegroundColor Magenta
Write-Host "========================================" -ForegroundColor Magenta
Write-Host ""
Write-Host "Watching for real changes..." -ForegroundColor Cyan
Write-Host "No changes = No commit" -ForegroundColor Gray
Write-Host "Press Ctrl+C to stop." -ForegroundColor Gray
Write-Host ""

$lastChangeTime = $null

while ($true) {

    try {

        $status = git status --porcelain

        if ($status) {

            if ($null -eq $lastChangeTime) {
                $lastChangeTime = Get-Date

                Write-Host ""
                Write-Host "Changes detected." -ForegroundColor Yellow
                Write-Host "Waiting for you to finish editing..." -ForegroundColor Gray
            }

            $elapsed = ((Get-Date) - $lastChangeTime).TotalSeconds

            if ($elapsed -ge $QuietPeriod) {

                Write-Host ""
                Write-Host "Creating automatic checkpoint..." -ForegroundColor Cyan

                git add .

                $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"

                git commit -m "chore: portfolio update - $timestamp"

                if ($LASTEXITCODE -eq 0) {

                    Write-Host "Commit created successfully." -ForegroundColor Green

                    git push

                    if ($LASTEXITCODE -eq 0) {
                        Write-Host "Changes pushed to GitHub." -ForegroundColor Green
                    }
                    else {
                        Write-Host "Push failed. Your commit is safe locally." -ForegroundColor Red
                    }
                }

                $lastChangeTime = $null
            }
        }
        else {
            $lastChangeTime = $null
        }

    }
    catch {

        Write-Host ""
        Write-Host "Auto-sync error:" -ForegroundColor Red
        Write-Host $_.Exception.Message -ForegroundColor Red
        Write-Host ""
    }

    Start-Sleep -Seconds $CheckInterval
}