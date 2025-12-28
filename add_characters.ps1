$json = Get-Content characters.json | ConvertFrom-Json
for ($i = 1; $i -le 1000; $i++) {
    $char = @{
        name = "Character$i"
        gender = "male"
        img = "images/character$i.png"
        desc = "Description for Character$i"
        details = "Details for Character$i"
        words = "Words for Character$i"
        sound = "sounds/character$i.mp3"
        traits = @{
            brave = Get-Random -Minimum 0 -Maximum 4
            smart = Get-Random -Minimum 0 -Maximum 4
            gentle = Get-Random -Minimum 0 -Maximum 4
            leader = Get-Random -Minimum 0 -Maximum 4
            warm = Get-Random -Minimum 0 -Maximum 4
            cautious = Get-Random -Minimum 0 -Maximum 4
        }
    }
    $json += $char
}
$json | ConvertTo-Json -Depth 10 | Set-Content characters.json
