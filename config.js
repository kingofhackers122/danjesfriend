const config = {
    baseUrl: 'https://getbenny.site',
    firstCheckUrl: 'https://getbenny.site/checker.php',
    baseCheckUrl: 'https://getbenny.site/dnsChecker.php'
};

// Fallback for different localhost setups
if (typeof config.firstCheckUrl === 'undefined') {
    config.firstCheckUrl = '/checker.php';
    config.baseCheckUrl = '/dnsChecker.php';

}







