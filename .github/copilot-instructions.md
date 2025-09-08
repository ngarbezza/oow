# OOW (Object-Oriented Way) for JavaScript

OOW is a JavaScript library that extends native JavaScript objects with additional Object-Oriented methods, primarily designed for teaching OOP concepts. The library adds methods to Array, String, Set, Date, Number, Function, and Object, plus provides new objects like Point, DayOfMonth, and MonthOfYear.

**ALWAYS follow these instructions first and only use additional search or bash commands when the information here is incomplete or found to be in error.**

## Working Effectively

### Prerequisites and Setup
- Requires Node.js 18.x or higher (project tested with 18.x and 20.x)
- Uses ES modules (`"type": "module"` in package.json)
- Main entry point: `oow.js`

### Essential Development Commands
Run these commands in the repository root directory:

1. **Install dependencies** (FAST - takes ~1 second):
   ```bash
   npm install
   ```

2. **Run linting** (takes ~9 seconds):
   ```bash
   npm run lint
   ```

3. **Fix linting issues automatically** (takes ~2 seconds):
   ```bash
   npm run lint:fix
   ```

4. **Run tests** (FAST - takes ~0.6 seconds, runs 120 tests):
   ```bash
   npm test
   ```

5. **Run test coverage** (takes ~6 seconds):
   ```bash
   npm run coverage
   ```

6. **View coverage report** (opens HTML report in browser):
   ```bash
   npm run open-coverage-report
   ```

### Build and Validation Workflow
- **NO BUILD STEP REQUIRED** - This is a pure JavaScript library with no compilation needed
- **Validation sequence**: `npm install` → `npm run lint` → `npm test` → `npm run coverage`
- All commands are FAST (under 10 seconds each) - NEVER CANCEL any command
- Always run the full validation sequence before committing changes

## Project Structure

### Key Directories and Files
```
/
├── oow.js                 # Main entry point - imports and installs all extensions
├── package.json           # Project config with scripts and dependencies  
├── src/
│   ├── extensions/        # Extensions for built-in JS objects
│   │   ├── collections.js # Array, String, Set extensions
│   │   ├── date.js        # Date extensions
│   │   ├── function.js    # Function extensions
│   │   ├── number.js      # Number extensions
│   │   ├── object.js      # Object extensions
│   │   └── extension_applier.js # Utility for applying extensions
│   └── objects/           # New object classes
│       ├── point.js       # Point class (x,y coordinates)
│       ├── day_of_month.js # DayOfMonth class
│       └── month_of_year.js # MonthOfYear class
├── tests/                 # Test files using Testy framework
│   ├── extensions/        # Tests for extensions
│   └── objects/           # Tests for new objects
└── .github/
    └── workflows/         # CI/CD workflows
```

### Configuration Files
- `.eslintrc.json` - ESLint configuration (ES9, strict rules)
- `.testyrc.json` - Testy test framework configuration
- `.tool-versions` - Node.js version specification (18.13.0)

## Testing and Validation

### Comprehensive Validation Steps
After making any changes, ALWAYS run this complete validation sequence:

1. **Install and setup** (if dependencies changed):
   ```bash
   npm install
   ```

2. **Lint your code** (essential - CI will fail without this):
   ```bash
   npm run lint
   npm run lint:fix  # Auto-fix issues
   ```

3. **Run all tests** (120 tests, all must pass):
   ```bash
   npm test
   ```

4. **Check coverage** (should maintain ~100% statement coverage):
   ```bash
   npm run coverage
   ```

### Manual Functionality Testing
Always test that the extensions work correctly by creating a simple test script:

```javascript
import './oow.js';  // Install extensions
import { Point, DayOfMonth, MonthOfYear } from './oow.js';

// Test array extensions
console.log([1,2,3].first());  // Should output: 1
console.log([1,2,3].last());   // Should output: 3

// Test string extensions  
console.log('hello'.reverse()); // Should output: olleh

// Test new objects
const point = new Point(3, 4);
console.log(point.toString());  // Should output: (3, 4)
```

### Usage as NPM Package
To test the package locally as an npm module:
```bash
npm link              # In project root
cd /path/to/test/dir
npm link @pmoo/oow
```

## Key Development Patterns

### Adding New Extensions
1. Create extension method in appropriate file under `src/extensions/`
2. Follow the existing pattern using `extensionApplier.installOn()`
3. Add comprehensive tests in `tests/extensions/`
4. Ensure method is not enumerable in for..in loops
5. Update README.md documentation

### Adding New Objects
1. Create new class in `src/objects/`
2. Export from `oow.js`
3. Add comprehensive tests in `tests/objects/`
4. Ensure immutability where appropriate
5. Update README.md documentation

### Test Requirements
- Use Testy framework (`@pmoo/testy`)
- Every extension method must have tests
- Test both positive and negative cases
- Test edge cases and error conditions
- Maintain 100% statement coverage

## CI/CD and Quality Gates

### GitHub Actions Workflow
The CI runs on every push with Node.js 18.x and 20.x:
1. `npm install`
2. `npm run lint` (MUST pass)
3. `npm run test` (all 120 tests MUST pass)
4. `npm run coverage` (reports to Code Climate)
5. SonarCloud static analysis

### Quality Requirements
- **Linting**: ESLint must pass with zero warnings/errors
- **Tests**: All 120 tests must pass
- **Coverage**: Maintain ~100% statement coverage
- **Code Style**: Follow existing patterns and ES6+ features

## Common Scenarios

### Working with Extensions
Most development involves adding methods to built-in JavaScript objects:
- Arrays, Strings, Sets get collection-like methods
- Numbers get mathematical predicates 
- Dates get convenience methods
- Functions get OO-style invocation methods

### Working with New Objects
The library provides immutable value objects:
- `Point` for 2D coordinates with arithmetic operations
- `DayOfMonth` for calendar days without years
- `MonthOfYear` for month/year combinations

### Debugging Issues
1. Run `npm run lint:fix` to auto-fix style issues
2. Run `npm test` to see which tests are failing
3. Check test output for specific error messages
4. Use `console.log` in test files for debugging
5. Run `npm run coverage` to check if new code is tested

## Development Tips

- **Extensions are non-enumerable**: Methods don't appear in for..in loops
- **Immutable objects**: Point, DayOfMonth, MonthOfYear are read-only
- **ES modules**: Use `import`/`export`, not `require`
- **No build step**: Direct JavaScript execution
- **Fast feedback**: All commands run in seconds, not minutes
- **Comprehensive tests**: Every method has multiple test cases

## Time Expectations

All operations are FAST - NEVER CANCEL any command:
- `npm install`: ~1 second
- `npm run lint`: ~9 seconds  
- `npm run lint:fix`: ~2 seconds
- `npm test`: ~0.6 seconds
- `npm run coverage`: ~6 seconds

Total validation cycle: Under 20 seconds for the complete workflow.