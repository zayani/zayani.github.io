var data = [

    { "date": "Jun 04, 10", "F9Version": "F9 v1.0", "boosterVersion": "B0003", "LaunchSite": "CCAFS LC-40", "_payload": "Dragon Spacecraft Qualification Unit", "payloadMass": "", "Orbit": "LEO", "customer": "SpaceX", "launchoutcome": "Success", "boosterLanding": "Failure (parachute)" },

    { "date": "Dec 08, 10", "F9Version": "F9 v1.0", "boosterVersion": "B0004", "LaunchSite": "CCAFS LC-40", "_payload": "Dragon demo flight C1, two CubeSats, wheel of Brouère cheese", "payloadMass": "", "Orbit": "LEO (ISS)", "customer": " NASA (COTS) NRO ", "launchoutcome": "Success", "boosterLanding": "Failure (parachute)" },

    { "date": "May 22, 12", "F9Version": "F9 v1.0", "boosterVersion": "B0005", "LaunchSite": "CCAFS LC-40", "_payload": "Dragon demo flight C2+", "payloadMass": "525 kg (1,157 lb)", "Orbit": "LEO (ISS)", "customer": "NASA (COTS)", "launchoutcome": "Success", "boosterLanding": "No attempt" },

    { "date": "Oct 08, 12", "F9Version": "F9 v1.0", "boosterVersion": "B0006", "LaunchSite": "CCAFS LC-40", "_payload": "SpaceX CRS-1", "payloadMass": "500 kg (1,100 lb)", "Orbit": "LEO (ISS)", "customer": "NASA (CRS)", "launchoutcome": "Success", "boosterLanding": "No attempt" },

    { "date": "Mar 01, 13", "F9Version": "F9 v1.0", "boosterVersion": "B0007", "LaunchSite": "CCAFS LC-40", "_payload": "SpaceX CRS-2", "payloadMass": "677 kg (1,493 lb)", "Orbit": "LEO (ISS)", "customer": "NASA (CRS)", "launchoutcome": "Success", "boosterLanding": "No attempt" },

    { "date": "Sep 29, 13", "F9Version": "F9 v1.1", "boosterVersion": "B1003", "LaunchSite": "VAFB SLC-4E", "_payload": "CASSIOPE", "payloadMass": "500 kg (1,100 lb)", "Orbit": "Polar LEO", "customer": "MDA", "launchoutcome": "Success", "boosterLanding": "Uncontrolled (ocean)" },

    { "date": "Dec 03, 13", "F9Version": "F9 v1.1", "boosterVersion": "Bundefined", "LaunchSite": "CCAFS LC-40", "_payload": "SES-8", "payloadMass": "3,170 kg (6,990 lb)", "Orbit": "GTO", "customer": "SES", "launchoutcome": "Success", "boosterLanding": "No attempt" },

    { "date": "Jan 06, 14", "F9Version": "F9 v1.1", "boosterVersion": "Bundefined", "LaunchSite": "CCAFS LC-40", "_payload": "Thaicom 6", "payloadMass": "3,325 kg (7,330 lb)", "Orbit": "GTO", "customer": "Thaicom", "launchoutcome": "Success", "boosterLanding": "No attempt" },

    { "date": "Apr 18, 14", "F9Version": "F9 v1.1", "boosterVersion": "Bundefined", "LaunchSite": "CCAFS LC-40", "_payload": "SpaceX CRS-3", "payloadMass": "2,296 kg (5,062 lb)", "Orbit": "LEO (ISS)", "customer": "NASA (CRS)", "launchoutcome": "Success", "boosterLanding": "Controlled (ocean)" },

    { "date": "Jul 14, 14", "F9Version": "F9 v1.1", "boosterVersion": "Bundefined", "LaunchSite": "CCAFS LC-40", "_payload": "Orbcomm-OG2-1 (6 satellites)", "payloadMass": "1,316 kg (2,901 lb)", "Orbit": "LEO", "customer": "Orbcomm", "launchoutcome": "Success", "boosterLanding": "Controlled (ocean)" },

    { "date": "Aug 05, 14", "F9Version": "F9 v1.1", "boosterVersion": "Bundefined", "LaunchSite": "CCAFS LC-40", "_payload": "AsiaSat 8", "payloadMass": "4,535 kg (9,998 lb)", "Orbit": "GTO", "customer": "AsiaSat", "launchoutcome": "Success", "boosterLanding": "No attempt" },

    { "date": "Sep 07, 14", "F9Version": "F9 v1.1", "boosterVersion": "B1011", "LaunchSite": "CCAFS LC-40", "_payload": "AsiaSat 6", "payloadMass": "4,428 kg (9,762 lb)", "Orbit": "GTO", "customer": "AsiaSat", "launchoutcome": "Success", "boosterLanding": "No attempt" },

    { "date": "Sep 21, 14", "F9Version": "F9 v1.1", "boosterVersion": "B1010", "LaunchSite": "CCAFS LC-40", "_payload": "SpaceX CRS-4", "payloadMass": "2,216 kg (4,885 lb)", "Orbit": "LEO (ISS)", "customer": "NASA (CRS)", "launchoutcome": "Success", "boosterLanding": "Uncontrolled (ocean)" },

    { "date": "Jan 10, 15", "F9Version": "F9 v1.1", "boosterVersion": "B1012", "LaunchSite": "CCAFS LC-40", "_payload": "SpaceX CRS-5", "payloadMass": "2,395 kg (5,280 lb)", "Orbit": "LEO (ISS)", "customer": "NASA (CRS)", "launchoutcome": "Success", "boosterLanding": "Failure (drone ship)" },

    { "date": "Feb 11, 15", "F9Version": "F9 v1.1", "boosterVersion": "B1013", "LaunchSite": "CCAFS LC-40", "_payload": "DSCOVR", "payloadMass": "570 kg (1,260 lb)", "Orbit": "HEO (Sun–Earth L1 insertion)", "customer": " U.S. Air Force NASA NOAA ", "launchoutcome": "Success", "boosterLanding": "Controlled (ocean)" },

    { "date": "Mar 02, 15", "F9Version": "F9 v1.1", "boosterVersion": "B1014", "LaunchSite": "CCAFS LC-40", "_payload": " ABS-3A Eutelsat 115 West B ", "payloadMass": "4,159 kg (9,169 lb)", "Orbit": "GTO", "customer": " ABS Eutelsat ", "launchoutcome": "Success", "boosterLanding": "No attempt" },

    { "date": "Apr 14, 15", "F9Version": "F9 v1.1", "boosterVersion": "B1015", "LaunchSite": "CCAFS LC-40", "_payload": "SpaceX CRS-6", "payloadMass": "1,898 kg (4,184 lb)", "Orbit": "LEO (ISS)", "customer": "NASA (CRS)", "launchoutcome": "Success", "boosterLanding": "Failure (drone ship)" },

    { "date": "Apr 27, 15", "F9Version": "F9 v1.1", "boosterVersion": "B1016", "LaunchSite": "CCAFS LC-40", "_payload": "TürkmenÄlem 52°E / MonacoSAT", "payloadMass": "4,707 kg (10,377 lb)", "Orbit": "GTO", "customer": "Turkmenistan National Space Agency", "launchoutcome": "Success", "boosterLanding": "No attempt" },

    { "date": "Jun 28, 15", "F9Version": "F9 v1.1", "boosterVersion": "B1018", "LaunchSite": "CCAFS LC-40", "_payload": "SpaceX CRS-7", "payloadMass": "1,952 kg (4,303 lb)", "Orbit": "LEO (ISS)", "customer": "NASA (CRS)", "launchoutcome": "Failure (in flight)", "boosterLanding": "Precluded (drone ship)" },

    { "date": "Dec 22, 15", "F9Version": "F9 FT", "boosterVersion": "B1019", "LaunchSite": "CCAFS LC-40", "_payload": "Orbcomm-OG2-2 (11 satellites)", "payloadMass": "2,034 kg (4,484 lb)", "Orbit": "LEO", "customer": "Orbcomm", "launchoutcome": "Success", "boosterLanding": "Success (ground pad)" },

    { "date": "Jan 17, 16", "F9Version": "F9 v1.1", "boosterVersion": "B1017", "LaunchSite": "VAFB SLC-4E", "_payload": "Jason-3", "payloadMass": "553 kg (1,219 lb)", "Orbit": "LEO", "customer": " NASA (LSP) NOAA CNES ", "launchoutcome": "Success", "boosterLanding": "Failure (drone ship)" },

    { "date": "Mar 04, 16", "F9Version": "F9 FT", "boosterVersion": "B1020", "LaunchSite": "CCAFS LC-40", "_payload": "SES-9", "payloadMass": "5,271 kg (11,621 lb)", "Orbit": "GTO", "customer": "SES", "launchoutcome": "Success", "boosterLanding": "Failure (drone ship)" },

    { "date": "Apr 08, 16", "F9Version": "F9 FT", "boosterVersion": "B1021.1", "LaunchSite": "CCAFS LC-40", "_payload": "SpaceX CRS-8", "payloadMass": "3,136 kg (6,914 lb)", "Orbit": "LEO (ISS)", "customer": "NASA (CRS)", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "May 06, 16", "F9Version": "F9 FT", "boosterVersion": "B1022", "LaunchSite": "CCAFS LC-40", "_payload": "JCSAT-14", "payloadMass": "4,696 kg (10,353 lb)", "Orbit": "GTO", "customer": "SKY Perfect JSAT Group", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "May 27, 16", "F9Version": "F9 FT", "boosterVersion": "B1023.1", "LaunchSite": "CCAFS LC-40", "_payload": "Thaicom 8", "payloadMass": "3,100 kg (6,800 lb)", "Orbit": "GTO", "customer": "Thaicom", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "Jun 15, 16", "F9Version": "F9 FT", "boosterVersion": "B1024", "LaunchSite": "CCAFS LC-40", "_payload": " ABS-2A Eutelsat 117 West B ", "payloadMass": "3,600 kg (7,900 lb) ", "Orbit": "GTO", "customer": " ABS Eutelsat ", "launchoutcome": "Success", "boosterLanding": "Failure (drone ship)" },

    { "date": "Jul 18, 16", "F9Version": "F9 FT", "boosterVersion": "B1025.1", "LaunchSite": "CCAFS LC-40", "_payload": "SpaceX CRS-9", "payloadMass": "2,257 kg (4,976 lb)", "Orbit": "LEO (ISS)", "customer": "NASA (CRS)", "launchoutcome": "Success", "boosterLanding": "Success (ground pad)" },

    { "date": "Aug 14, 16", "F9Version": "F9 FT", "boosterVersion": "B1026", "LaunchSite": "CCAFS LC-40", "_payload": "JCSAT-16", "payloadMass": "4,600 kg (10,100 lb)", "Orbit": "GTO", "customer": "SKY Perfect JSAT Group", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "Sep 03, 16", "F9Version": "F9 FT", "boosterVersion": "B1028", "LaunchSite": "CCAFS LC-40", "_payload": "Amos-6", "payloadMass": "5,500 kg (12,100 lb)", "Orbit": "GTO", "customer": "Spacecom", "launchoutcome": "Precluded (failure pre-flight)", "boosterLanding": "Precluded (drone ship)" },

    { "date": "Jan 14, 17", "F9Version": "F9 FT", "boosterVersion": "B1029.1", "LaunchSite": "VAFB SLC-4E", "_payload": "Iridium NEXT-1 (10 satellites)", "payloadMass": "9,600 kg (21,200 lb)", "Orbit": "Polar LEO", "customer": "Iridium Communications", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "Feb 19, 17", "F9Version": "F9 FT", "boosterVersion": "B1031.1", "LaunchSite": "KSC LC-39A", "_payload": "SpaceX CRS-10", "payloadMass": "2,490 kg (5,490 lb)", "Orbit": "LEO (ISS)", "customer": "NASA (CRS)", "launchoutcome": "Success", "boosterLanding": "Success (ground pad)" },

    { "date": "Mar 16, 17", "F9Version": "F9 FT", "boosterVersion": "B1030", "LaunchSite": "KSC LC-39A", "_payload": "EchoStar 23", "payloadMass": "5,600 kg (12,300 lb)", "Orbit": "GTO", "customer": "EchoStar", "launchoutcome": "Success", "boosterLanding": "No attempt" },

    { "date": "Mar 30, 17", "F9Version": "F9 FT ♺", "boosterVersion": "B1021.2", "LaunchSite": "KSC LC-39A", "_payload": "SES-10", "payloadMass": "5,300 kg (11,700 lb)", "Orbit": "GTO", "customer": "SES", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "May 01, 17", "F9Version": "F9 FT", "boosterVersion": "B1032.1", "LaunchSite": "KSC LC-39A", "_payload": "NROL-76", "payloadMass": "Classified", "Orbit": "LEO", "customer": "NRO", "launchoutcome": "Success", "boosterLanding": "Success (ground pad)" },

    { "date": "May 15, 17", "F9Version": "F9 FT", "boosterVersion": "B1034", "LaunchSite": "KSC LC-39A", "_payload": "Inmarsat-5 F4", "payloadMass": "6,070 kg (13,380 lb)", "Orbit": "GTO", "customer": "Inmarsat", "launchoutcome": "Success", "boosterLanding": "No attempt" },

    { "date": "Jun 03, 17", "F9Version": "F9 FT", "boosterVersion": "B1035.1", "LaunchSite": "KSC LC-39A", "_payload": "SpaceX CRS-11", "payloadMass": "2,708 kg (5,970 lb)", "Orbit": "LEO (ISS)", "customer": "NASA (CRS)", "launchoutcome": "Success", "boosterLanding": "Success (ground pad)" },

    { "date": "Jun 23, 17", "F9Version": "F9 FT ♺", "boosterVersion": "B1029.2", "LaunchSite": "KSC LC-39A", "_payload": "BulgariaSat-1", "payloadMass": "3,669 kg (8,089 lb)", "Orbit": "GTO", "customer": "Bulsatcom", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "Jun 25, 17", "F9Version": "F9 FT", "boosterVersion": "B1036.1", "LaunchSite": "VAFB SLC-4E", "_payload": "Iridium NEXT-2 (10 satellites)", "payloadMass": "9,600 kg (21,200 lb)", "Orbit": "LEO", "customer": "Iridium Communications", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "Jul 05, 17", "F9Version": "F9 FT", "boosterVersion": "B1037", "LaunchSite": "KSC LC-39A", "_payload": "Intelsat 35e", "payloadMass": "6,761 kg (14,905 lb)", "Orbit": "GTO", "customer": "Intelsat", "launchoutcome": "Success", "boosterLanding": "No attempt" },

    { "date": "Aug 14, 17", "F9Version": "F9", "boosterVersion": "B4", "LaunchSite": "KSC LC-39A", "_payload": "SpaceX CRS-12", "payloadMass": "3,310 kg (7,300 lb)", "Orbit": "LEO (ISS)", "customer": "NASA (CRS)", "launchoutcome": "Success", "boosterLanding": "Success (ground pad)" },

    { "date": "Aug 24, 17", "F9Version": "F9 FT", "boosterVersion": "B1038.1", "LaunchSite": "VAFB SLC-4E", "_payload": "Formosat-5", "payloadMass": "475 kg (1,047 lb)", "Orbit": "SSO", "customer": "NSPO", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "Sep 07, 17", "F9Version": "F9", "boosterVersion": "B4", "LaunchSite": "KSC LC-39A", "_payload": "Boeing X-37B OTV-5", "payloadMass": "4,990 kg (11,000 lb) + OTV payload", "Orbit": "LEO", "customer": "U.S. Air Force", "launchoutcome": "Success", "boosterLanding": "Success (ground pad)" },

    { "date": "Oct 09, 17", "F9Version": "F9", "boosterVersion": "B4", "LaunchSite": "VAFB SLC-4E", "_payload": "Iridium NEXT-3 (10 satellites)", "payloadMass": "9,600 kg (21,200 lb)", "Orbit": "Polar LEO", "customer": "Iridium Communications", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "Oct 11, 17", "F9Version": "F9 FT ♺", "boosterVersion": "B1031.2", "LaunchSite": "KSC LC-39A", "_payload": "SES-11 / EchoStar 105", "payloadMass": "5,200 kg (11,500 lb)", "Orbit": "GTO", "customer": " SES EchoStar ", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "Oct 30, 17", "F9Version": "F9", "boosterVersion": "B4", "LaunchSite": "KSC LC-39A", "_payload": "Koreasat 5A", "payloadMass": "3,500 kg (7,700 lb)", "Orbit": "GTO", "customer": "KT Corporation", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "Dec 15, 17", "F9Version": "F9 FT ♺", "boosterVersion": "B1035.2", "LaunchSite": "CCAFS SLC-40", "_payload": "SpaceX CRS-13", "payloadMass": "2,205 kg (4,861 lb)", "Orbit": "LEO (ISS)", "customer": "NASA (CRS)", "launchoutcome": "Success", "boosterLanding": "Success (ground pad)" },

    { "date": "Dec 23, 17", "F9Version": "F9 FT ♺", "boosterVersion": "B1036.2", "LaunchSite": "VAFB SLC-4E", "_payload": "Iridium NEXT-4 (10 satellites)", "payloadMass": "9,600 kg (21,200 lb)", "Orbit": "Polar LEO", "customer": "Iridium Communications", "launchoutcome": "Success", "boosterLanding": "Controlled (ocean)" },

    { "date": "Jan 08, 18", "F9Version": "F9", "boosterVersion": "B4", "LaunchSite": "CCAFS SLC-40 ", "_payload": "Zuma", "payloadMass": "Classified", "Orbit": "LEO", "customer": "Northrop Grumman", "launchoutcome": "Success (payload status unclear)", "boosterLanding": "Success (ground pad)" },

    { "date": "Jan 31, 18", "F9Version": "F9 FT ♺", "boosterVersion": "B1032.2", "LaunchSite": "CCAFS SLC-40", "_payload": "GovSat-1 / SES-16", "payloadMass": "4,230 kg (9,330 lb)", "Orbit": "GTO", "customer": "SES", "launchoutcome": "Success", "boosterLanding": "Controlled (ocean)" },

    { "date": "Feb 06, 18", "F9Version": "Falcon Heavy core", "boosterVersion": "B1033", "LaunchSite": "KSC LC-39A", "_payload": "Elon Musk's Tesla Roadster", "payloadMass": "~1,250 kg (2,760 lb)", "Orbit": "Helio CSO Heliocentric 0.99–1.67 AU (close to Mars transfer orbit)", "customer": "SpaceX", "launchoutcome": "Success", "boosterLanding": "Failure (drone ship)" },

    { "date": "Feb 22, 18", "F9Version": "F9 FT ♺", "boosterVersion": "B1038.2", "LaunchSite": "VAFB SLC-4E", "_payload": " Paz Tintin A & B ", "payloadMass": "2,150 kg (4,740 lb)", "Orbit": "SSO", "customer": " Hisdesat exactEarth SpaceX ", "launchoutcome": "Success", "boosterLanding": "No attempt" },

    { "date": "Mar 06, 18", "F9Version": "F9", "boosterVersion": "B4", "LaunchSite": "CCAFS SLC-40", "_payload": " Hispasat 30W-6 PODSat ", "payloadMass": "6,092 kg (13,431 lb)", "Orbit": "GTO", "customer": " Hispasat NovaWurks ", "launchoutcome": "Success", "boosterLanding": "No attempt" },

    { "date": "Mar 30, 18", "F9Version": "F9", "boosterVersion": "B4 ♺", "LaunchSite": "VAFB SLC-4E", "_payload": "Iridium NEXT-5 (10 satellites)", "payloadMass": "9,600 kg (21,200 lb)", "Orbit": "Polar LEO", "customer": "Iridium Communications", "launchoutcome": "Success", "boosterLanding": "No attempt" },

    { "date": "Apr 02, 18", "F9Version": "F9", "boosterVersion": "B4 ♺", "LaunchSite": "CCAFS SLC-40", "_payload": "SpaceX CRS-14", "payloadMass": "2,647 kg (5,836 lb)", "Orbit": "LEO (ISS)", "customer": "NASA (CRS)", "launchoutcome": "Success", "boosterLanding": "No attempt" },

    { "date": "Apr 18, 18", "F9Version": "F9", "boosterVersion": "B4", "LaunchSite": "CCAFS SLC-40", "_payload": "Transiting Exoplanet Survey Satellite (TESS)", "payloadMass": "362 kg (798 lb)", "Orbit": "HEO for P/2 orbit", "customer": "NASA (LSP)", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "May 11, 18", "F9Version": "F9", "boosterVersion": "B5", "LaunchSite": "KSC LC-39A", "_payload": "Bangabandhu-1", "payloadMass": "3,600 kg (7,900 lb)", "Orbit": "GTO", "customer": "Thales-Alenia/BTRC", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "May 22, 18", "F9Version": "F9", "boosterVersion": "B4 ♺", "LaunchSite": "VAFB SLC-4E", "_payload": " Iridium NEXT-6 (5 satellites) GRACE-FO × 2 ", "payloadMass": "6,460 kg (14,240 lb)", "Orbit": "Polar LEO", "customer": " Iridium Communications GFZ  • NASA ", "launchoutcome": "Success", "boosterLanding": "No attempt" },

    { "date": "Jun 04, 18", "F9Version": "F9", "boosterVersion": "B4 ♺", "LaunchSite": "CCAFS SLC-40", "_payload": "SES-12", "payloadMass": "5,384 kg (11,870 lb)", "Orbit": "GTO", "customer": "SES", "launchoutcome": "Success", "boosterLanding": "No attempt" },

    { "date": "Jun 29, 18", "F9Version": "F9", "boosterVersion": "B4 ♺", "LaunchSite": "CCAFS SLC-40", "_payload": "SpaceX CRS-15", "payloadMass": "2,697 kg (5,946 lb)", "Orbit": "LEO (ISS)", "customer": "NASA (CRS)", "launchoutcome": "Success", "boosterLanding": "No attempt" },

    { "date": "Jul 22, 18", "F9Version": "F9", "boosterVersion": "B5", "LaunchSite": "CCAFS SLC-40", "_payload": "Telstar 19V", "payloadMass": "7,075 kg (15,598 lb)", "Orbit": "GTO", "customer": "Telesat", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "Jul 25, 18", "F9Version": "F9", "boosterVersion": "B5", "LaunchSite": "VAFB SLC-4E", "_payload": "Iridium NEXT-7 (10 satellites)", "payloadMass": "9,600 kg (21,200 lb)", "Orbit": "Polar LEO", "customer": "Iridium Communications", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "Aug 07, 18", "F9Version": "F9", "boosterVersion": "B5 ♺", "LaunchSite": "CCAFS SLC-40", "_payload": "Merah Putih (formerly Telkom 4)", "payloadMass": "5,800 kg (12,800 lb)", "Orbit": "GTO", "customer": "Telkom Indonesia", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "Sep 10, 18", "F9Version": "F9", "boosterVersion": "B5", "LaunchSite": "CCAFS SLC-40", "_payload": "Telstar 18V / Apstar-5C", "payloadMass": "7,060 kg (15,560 lb)", "Orbit": "GTO", "customer": "Telesat", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "Oct 08, 18", "F9Version": "F9", "boosterVersion": "B5 ♺", "LaunchSite": "VAFB SLC-4E", "_payload": "SAOCOM 1A", "payloadMass": "3,000 kg (6,600 lb)", "Orbit": "SSO", "customer": "CONAE", "launchoutcome": "Success", "boosterLanding": "Success (ground pad)" },

    { "date": "Nov 15, 18", "F9Version": "F9", "boosterVersion": "B5 ♺", "LaunchSite": "KSC LC-39A", "_payload": "Es'hail 2", "payloadMass": "5,300 kg (11,700 lb)", "Orbit": "GTO", "customer": "Es'hailSat", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "Dec 03, 18", "F9Version": "F9", "boosterVersion": "B5 ♺", "LaunchSite": "VAFB SLC-4E", "_payload": "SSO-A (SmallSat Express)", "payloadMass": "~4,000 kg (8,800 lb)", "Orbit": "SSO", "customer": "Spaceflight Industries", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "Dec 05, 18", "F9Version": "F9", "boosterVersion": "B5", "LaunchSite": "CCAFS SLC-40", "_payload": "SpaceX CRS-16", "payloadMass": "2,500 kg (5,600 lb)", "Orbit": "LEO (ISS)", "customer": "NASA (CRS)", "launchoutcome": "Success", "boosterLanding": "Failure (ground pad)" },

    { "date": "Dec 23, 18", "F9Version": "F9", "boosterVersion": "B5", "LaunchSite": "CCAFS SLC-40", "_payload": "GPS III-01", "payloadMass": "4,400 kg (9,700 lb)", "Orbit": "MEO", "customer": "U.S. Air Force", "launchoutcome": "Success", "boosterLanding": "No attempt" },

    { "date": "Jan 11, 19", "F9Version": "F9", "boosterVersion": "B5 ♺", "LaunchSite": "VAFB SLC-4E", "_payload": "Iridium NEXT-8 (10 satellites)", "payloadMass": "9,600 kg (21,200 lb)", "Orbit": "Polar LEO", "customer": "Iridium Communications", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "Feb 22, 19", "F9Version": "F9", "boosterVersion": "B5 ♺", "LaunchSite": "CCAFS SLC-40", "_payload": " Nusantara Satu (PSN-6) Beresheet Moon lander S5 ", "payloadMass": "4,850 kg (10,690 lb)", "Orbit": "GTO", "customer": " PSN SpaceIL / IAI Air Force Research ", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "Mar 02, 19", "F9Version": "F9", "boosterVersion": "B5", "LaunchSite": "KSC LC-39A", "_payload": "SpX-DM1", "payloadMass": "12,055 kg (26,577 lb)", "Orbit": "LEO (ISS)", "customer": "NASA (CCD)", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "Apr 11, 19", "F9Version": "Falcon Heavy", "boosterVersion": "B1055 core", "LaunchSite": "KSC LC-39A", "_payload": "Arabsat-6A", "payloadMass": "6,465 kg (14,253 lb)", "Orbit": "GTO", "customer": "Arabsat", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "May 04, 19", "F9Version": "F9", "boosterVersion": "B5", "LaunchSite": "CCAFS SLC-40", "_payload": "SpaceX CRS-17", "payloadMass": "2,495 kg (5,501 lb)", "Orbit": "LEO (ISS)", "customer": "NASA (CRS)", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "May 24, 19", "F9Version": "F9", "boosterVersion": "B5 ♺", "LaunchSite": "CCAFS SLC-40", "_payload": "Starlink v0.9 (60 satellites)", "payloadMass": "13,620 kg (30,030 lb)", "Orbit": "LEO", "customer": "SpaceX", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "Jun 12, 19", "F9Version": "F9", "boosterVersion": "B5 ♺", "LaunchSite": "VAFB SLC-4E", "_payload": "RADARSAT Constellation (3 satellites)", "payloadMass": "4,200 kg (9,300 lb)", "Orbit": "SSO", "customer": "Canadian Space Agency", "launchoutcome": "Success", "boosterLanding": "Success (ground pad)" },

    { "date": "Jun 25, 19", "F9Version": "Falcon Heavy", "boosterVersion": "B1057 core", "LaunchSite": "KSC LC-39A", "_payload": "Space Test Program Flight 2 (STP-2)", "payloadMass": "3,700 kg (8,200 lb)", "Orbit": "LEO / MEO", "customer": "U.S. Air Force", "launchoutcome": "Success", "boosterLanding": "Failure (drone ship)" },

    { "date": "Jul 25, 19", "F9Version": "F9", "boosterVersion": "B5 ♺", "LaunchSite": "CCAFS SLC-40", "_payload": "SpaceX CRS-18", "payloadMass": "2,268 kg (5,000 lb)", "Orbit": "LEO (ISS)", "customer": "NASA (CRS)", "launchoutcome": "Success", "boosterLanding": "Success (ground pad)" },

    { "date": "Aug 06, 19", "F9Version": "F9", "boosterVersion": "B5 ♺ ", "LaunchSite": "CCAFS SLC-40", "_payload": "AMOS-17", "payloadMass": "6,500 kg (14,300 lb)", "Orbit": "GTO", "customer": "Spacecom", "launchoutcome": "Success", "boosterLanding": "No attempt" },

    { "date": "Nov 11, 19", "F9Version": "F9", "boosterVersion": "B5 ♺", "LaunchSite": "CCAFS SLC-40", "_payload": "Starlink L1 v1.0 (60 satellites)", "payloadMass": "15,600 kg (34,400 lb)", "Orbit": "LEO", "customer": "SpaceX", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "Dec 05, 19", "F9Version": "F9", "boosterVersion": "B5 ", "LaunchSite": "CCAFS SLC-40", "_payload": "SpaceX CRS-19", "payloadMass": "2,617 kg (5,769 lb)", "Orbit": "LEO (ISS)", "customer": "NASA (CRS), 19", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" },

    { "date": "Dec 17, 19", "F9Version": "F9", "boosterVersion": "B5 ♺ ", "LaunchSite": "CCAFS SLC-40", "_payload": "JCSat-18 / Kacific 1", "payloadMass": "6,956 kg (15,335 lb)", "Orbit": "GTO", "customer": "JSAT  Kacific  ", "launchoutcome": "Success", "boosterLanding": "Success (drone ship)" }

]