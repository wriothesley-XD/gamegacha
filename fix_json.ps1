$json = Get-Content characters.json | ConvertFrom-Json

for ($i = 0; $i -lt $json.Count; $i++) {
    $char = $json[$i]
    if ($char.name -like "Character*") {
        $newTraits = [ordered]@{
            brave = $char.traits.brave
            smart = $char.traits.smart
            gentle = $char.traits.gentle
            leader = $char.traits.leader
            warm = $char.traits.warm
            cautious = $char.traits.cautious
        }
        $newChar = [ordered]@{
            name = $char.name
            gender = $char.gender
            img = $char.img
            desc = $char.desc
            details = $char.details
            words = $char.words
            sound = $char.sound
            traits = $newTraits
        }
        $json[$i] = $newChar
    }
}

$json | ConvertTo-Json -Depth 10 | Set-Content characters.json
