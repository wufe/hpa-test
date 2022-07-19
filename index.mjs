import process from 'node:process';

console.log(process);

function do_something()
{
    // just a keep-alive function
}

setInterval(do_something, 1000);

console.log('started v6, waiting for', 'SIGTERM');

process.on('SIGTERM', function()
{
    console.log('shutdown requested.. initiating countdown');

    let tick = 60;

    setInterval(() =>
    {
        console.log(tick--);

        if (tick <= 0)
            process.exit(0);
    }, 1000);
});