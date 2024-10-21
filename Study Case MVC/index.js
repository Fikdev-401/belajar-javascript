const command = process.argv[2];
const params = process.argv.slice(3);

switch (command) {
    case "add":
        console.log("Adding...");
        break;
    case "remove":
        console.log("Removing...");
        break;
    case "make":
        console.log("Updating...");
        break;
    case "show":
        console.log("Showing...");
        break;
    default:
        console.log("_______________________________");
        console.log("node : NGETIK YANG BENERR WOI!");
}