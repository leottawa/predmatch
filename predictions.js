const fixturesData = {
    england: [
      { home: 'Manchester United', away: 'Liverpool', date: '2023-06-18' },
      { home: 'Chelsea', away: 'Arsenal', date: '2023-06-19' },
      { home: 'Manchester City', away: 'Tottenham', date: '2023-06-20' }
    ],
    france: [
      { home: 'PSG', away: 'Marseille', date: '2023-06-18' },
      { home: 'Lyon', away: 'Monaco', date: '2023-06-19' },
      { home: 'Lille', away: 'Nice', date: '2023-06-20' }
    ],
    germany: [
      { home: 'Bayern Munich', away: 'Borussia Dortmund', date: '2023-06-18' },
      { home: 'RB Leipzig', away: 'Bayer Leverkusen', date: '2023-06-19' },
      { home: 'Schalke', away: 'Hoffenheim', date: '2023-06-20' }
    ],
    italy: [
      { home: 'Juventus', away: 'Inter Milan', date: '2023-06-18' },
      { home: 'AC Milan', away: 'Napoli', date: '2023-06-19' },
      { home: 'Roma', away: 'Lazio', date: '2023-06-20' }
    ],
    spain: [
      { home: 'Real Madrid', away: 'Barcelona', date: '2023-06-18' },
      { home: 'Atletico Madrid', away: 'Sevilla', date: '2023-06-19' },
      { home: 'Valencia', away: 'Villarreal', date: '2023-06-20' }
    ]
  };
  
  function showLeague(league) {
    const header = document.getElementById('header');
    const fixturesContainer = document.getElementById('fixtures-container');
    const fixturesList = document.getElementById('fixtures-list');
    const leagueTitle = document.getElementById('league-title');
  
    let leagueName = '';
  
    switch (league) {
      case 'england':
        leagueName = 'England Football League';
        break;
      case 'france':
        leagueName = 'France Football League';
        break;
      case 'germany':
        leagueName = 'Germany Football League';
        break;
      case 'italy':
        leagueName = 'Italy Football League';
        break;
      case 'spain':
        leagueName = 'Spain Football League';
        break;
      default:
        leagueName = 'Welcome to Football Leagues';
    }
  
    header.innerHTML = `<h1>${leagueName}</h1>`;
    leagueTitle.textContent = leagueName + ' Fixtures';
    
    // Clear previous fixtures
    fixturesList.innerHTML = '';
  
    // Add new fixtures
    fixturesData[league].forEach(fixture => {
      const fixtureElement = document.createElement('div');
      fixtureElement.className = 'fixture';
      fixtureElement.innerHTML = `<span>${fixture.home} vs ${fixture.away}</span><span>${fixture.date}</span>`;
      fixturesList.appendChild(fixtureElement);
    });
  
    // Show fixtures container
    fixturesContainer.classList.remove('hidden');
  }