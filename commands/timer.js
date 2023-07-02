const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('timer')
    .setDMPermission(true)
    .addIntegerOption(option => {
      option.setName('setupTime')
        .setRequired(true)
        .setMaxValue(60)
        .setMinValue(1)
        .setDescription('How many seconds to start the timer. Usually for a setup time')
    })
    .addIntegerOption(option => {
      option.setName('numRallies')
        .setRequired(true)
        .setMaxValue(5)
        .setMinValue(1)
        .setDescription('The amount of rallies to be set for each person')
    })
    .addIntegerOption(option => {
      option.setName('rallyInterval')
        .setRequired(true)
        .setMaxValue(60)
        .setMinValue(1)
        .setDescription('The interval between rallies')
    })
    .setDescription('Sets a rally timer'),
  async execute(interaction){
    await interaction.reply(interaction)
  }
}

async function startTimer(interaction)
{
  const setupTime = interaction.options.getInteger('setupTime')
  setTimeout(runTimer, setupTime * 1000)
}

async function runTimer(interaction) {
  const numRallies = interaction.options.getInteger('numRallies')
  const rallyInterval = interaction.options.getInteger('rallyInterval')

  let ralliesSet = 0

  if(ralliesSet <= numRallies) {
    ralliesSet++
    setInterval(runTimer, rallyInterval * 1000)
  }
}
