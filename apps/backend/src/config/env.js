export function requireEnv(name){
    if(!process.env[name]){
        console.error(`Missing required environment variable: ${name}`);
        process.exit(1);
    }
}