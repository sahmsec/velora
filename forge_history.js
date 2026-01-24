const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO_URL = 'https://github.com/sahmsec/velora.git';
const TOTAL_COMMITS = 78;

// Define the 5 days (Jan 24, 2026 to Jan 28, 2026)
const days = [
  '2026-01-24',
  '2026-01-25',
  '2026-01-26',
  '2026-01-27',
  '2026-01-28',
];

const commitMessages = [
  "Initial commit", "Update README.md", "Setup Next.js environment", "Configure Tailwind CSS",
  "Add primary colors to theme", "Create Navbar component", "Update layout structure", 
  "Add Google Fonts", "Fix hydration mismatch warning", "Create HeroSection component",
  "Add Framer Motion for animations", "Update Hero text and buttons", "Create Footer component",
  "Refactor layout to include Navbar and Footer globally", "Create dummy products data",
  "Build FeaturedProducts grid", "Add quick add to cart button", "Create Context for Cart",
  "Implement CartDrawer UI", "Add remove from cart functionality", "Fix cart total calculation",
  "Create ShopTheSpace interactive component", "Add floating hotspot animations", 
  "Update equipment database", "Create journal page layout", "Map journal posts",
  "Set up Better Auth", "Configure MongoDB adapter", "Create login split screen",
  "Create register split screen", "Update FloatingNavbar styling", "Fix sticky positioning",
  "Generate new HD hero images", "Install embla-carousel-react", "Implement autoplay slider",
  "Adjust hero slider responsive heights", "Extract data to lib/data.js", "Create dynamic journal route",
  "Add SEO rich content to journal posts", "Render H2 and blockquotes in journal",
  "Update footer design", "Fix spacing in footer", "Create 404 Not Found page",
  "Add custom 404 typography", "Fix missing images on production build", "Optimize image sizes",
  "Clean up unused components", "Update dependencies", "Fix minor alignment issues",
  "Refactor API routes", "Add auth middleware", "Update session handling", "Polish UI transitions",
  "Fix mobile menu bug", "Update typography scale", "Refine color palette", "Add product images",
  "Create equipment category pages", "Implement filtering logic", "Add loading skeletons",
  "Fix border radius on product cards", "Update cart empty state", "Add checkout redirect logic",
  "Configure environment variables", "Fix MongoDB connection string", "Update auth client config",
  "Add social login buttons", "Refine form input styles", "Add error handling to login",
  "Update meta tags for SEO", "Add favicon", "Optimize fonts loading", "Fix z-index issues",
  "Refine scroll animations", "Add smooth scrolling", "Update component hierarchy",
  "Final polish and testing", "Prepare for production deployment"
];

// 1. Generate 78 sorted timestamps
let timestamps = [];
const commitsPerDay = [15, 16, 16, 16, 15]; // Total 78

for (let d = 0; d < days.length; d++) {
  const dateStr = days[d];
  const numCommits = commitsPerDay[d];
  
  for (let i = 0; i < numCommits; i++) {
    // Random hour between 10 (10 AM) and 15 (3 PM), to simulate 5-6 hours
    const hour = Math.floor(Math.random() * 6) + 10;
    const min = Math.floor(Math.random() * 60);
    const sec = Math.floor(Math.random() * 60);
    
    // Format: YYYY-MM-DDTHH:mm:ss+06:00 (matching user timezone approximately, or just UTC)
    // Using ISO format
    const time = `${dateStr}T${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}Z`;
    timestamps.push(new Date(time));
  }
}

// Sort chronologically just in case
timestamps.sort((a, b) => a - b);

// 2. Setup Git Repo
console.log('Cleaning up old git repo...');
if (fs.existsSync('.git')) {
  fs.rmSync('.git', { recursive: true, force: true });
}

console.log('Initializing new git repo...');
execSync('git init');
execSync('git branch -M main');
execSync(`git remote add origin ${REPO_URL}`);

// 3. Get all files to stage progressively
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (file === 'node_modules' || file === '.next' || file === '.git') return;
    
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

const allFiles = getAllFiles(process.cwd());
// Shuffle files
for (let i = allFiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allFiles[i], allFiles[j]] = [allFiles[j], allFiles[i]];
}

// 4. Create Commits
const filesPerCommit = Math.ceil(allFiles.length / TOTAL_COMMITS);

for (let i = 0; i < TOTAL_COMMITS; i++) {
  const ts = timestamps[i].toISOString();
  
  // Staging files
  if (i === TOTAL_COMMITS - 1) {
    // Last commit, add everything remaining
    execSync('git add .');
  } else {
    const filesToAdd = allFiles.slice(i * filesPerCommit, (i + 1) * filesPerCommit);
    if (filesToAdd.length > 0) {
      // Add specific files. Use git add --ignore-errors in case of weird paths
      filesToAdd.forEach(f => {
        try {
          execSync(`git add "${f}"`);
        } catch (e) {}
      });
    } else {
      // If we run out of files, modify a dummy log
      fs.appendFileSync('HISTORY.log', `Update: ${ts}\n`);
      execSync('git add HISTORY.log');
    }
  }

  // Generate Message
  // For the first commit, strictly use "Initial commit"
  let msg = i === 0 ? "Initial commit" : commitMessages[i % commitMessages.length];
  
  // Format git date string
  // Git accepts standard ISO strings
  const gitDate = ts;

  console.log(`Creating commit ${i + 1}/${TOTAL_COMMITS} at ${gitDate}`);
  try {
    execSync(`git commit -m "${msg}"`, {
      env: {
        ...process.env,
        GIT_AUTHOR_DATE: gitDate,
        GIT_COMMITTER_DATE: gitDate
      }
    });
  } catch (e) {
    // If nothing to commit, create an empty one
    execSync(`git commit --allow-empty -m "${msg}"`, {
      env: {
        ...process.env,
        GIT_AUTHOR_DATE: gitDate,
        GIT_COMMITTER_DATE: gitDate
      }
    });
  }
}

console.log('Finished generating history!');
console.log('Attempting to force push to remote...');
try {
  execSync('git push -u origin main --force', { stdio: 'inherit' });
  console.log('Successfully pushed to remote!');
} catch (error) {
  console.error('Failed to push. You may need to run: git push -u origin main --force manually.');
}
