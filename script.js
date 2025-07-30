// Snowflakes creation with improved performance
class Snowflakes {
    constructor(containerId, count = 75) {
        this.container = document.getElementById(containerId);
        this.count = count;
        this.snowflakes = [];
        this.createSnowflakes();
    }

    createSnowflakes() {
        for (let i = 0; i < this.count; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            
            // Random properties
            const size = Math.random() * 5 + 2;
            const left = Math.random() * 100;
            const animationDuration = Math.random() * 15 + 5;
            const delay = Math.random() * 5;
            const opacity = Math.random() * 0.7 + 0.3;
            
            // Apply styles
            snowflake.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${left}vw;
                top: -${size}px;
                animation-duration: ${animationDuration}s;
                animation-delay: ${delay}s;
                opacity: ${opacity};
            `;
            
            this.container.appendChild(snowflake);
            this.snowflakes.push(snowflake);
        }
    }
}

// Feature data for the cards
const featuresData = [
    {
        title: "Annotations",
        description: "@Test, @BeforeEach, @AfterEach, @BeforeAll, @AfterAll, @DisplayName",
        hint: "Annotations are metadata that provide information about test methods. @Test marks a method as a test case. @BeforeEach and @AfterEach run before/after each test method. @BeforeAll and @AfterAll run once before/after all test methods in the class."
    },
    {
        title: "Assertions",
        description: "assertEquals, assertTrue, assertFalse, assertNull, assertNotNull, assertThrows",
        hint: "Assertions are used to verify expected results. JUnit 5 provides a rich set of assertion methods in the Assertions class. All assertions can be statically imported for cleaner test code."
    },
    {
        title: "Parameterized Tests",
        description: "@ParameterizedTest, @ValueSource, @CsvSource, @MethodSource",
        hint: "Parameterized tests allow you to run the same test with different arguments. @ValueSource provides literal values, @CsvSource allows CSV-formatted input, and @MethodSource lets you reference a factory method."
    },
    {
        title: "Test Suites",
        description: "@Suite, @SelectPackages, @SelectClasses, @IncludeTags",
        hint: "Test suites allow grouping multiple test classes. The JUnit Platform Suite engine provides annotations to configure test suites. Suites can include tests by package, class, or tags."
    },
    {
        title: "Conditional Execution",
        description: "@EnabledOnOs, @DisabledOnOs, @EnabledIf, @DisabledIf",
        hint: "These annotations allow conditional test execution based on environment factors like OS, system properties, or custom conditions. Useful for tests that should only run in specific environments."
    },
    {
        title: "Nested Tests",
        description: "@Nested, hierarchical test organization",
        hint: "Nested tests allow you to express hierarchical relationships between test cases. The @Nested annotation marks an inner class as containing tests. Each nested class can have its own lifecycle methods."
    }
];

// App Class - Main application controller
class JUnitLearningApp {
    constructor() {
        this.hintCount = 0;
        this.testCount = 0;
        this.successfulTests = 0;
        this.initialize();
    }

    initialize() {
        // Initialize snowflakes
        new Snowflakes('snowflakes-container');
        
        // Create feature cards
        this.createFeatureCards();
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Update stats
        this.updateStats();
    }

    createFeatureCards() {
        const featuresGrid = document.querySelector('.features-grid');
        
        featuresData.forEach((feature, index) => {
            const card = document.createElement('div');
            card.className = 'feature-card';
            card.innerHTML = `
                <h3 class="feature-title">
                    <span class="icon">${index + 1}.</span>
                    ${feature.title}
                </h3>
                <p class="feature-description">${feature.description}</p>
                <button class="hint-btn" data-index="${index}">
                    <span class="icon">💡</span>
                    Show Hint
                </button>
                <div class="hint-content">
                    <div class="hint-text">${feature.hint}</div>
                </div>
            `;
            featuresGrid.appendChild(card);
        });
    }

    setupEventListeners() {
        // Hint buttons
        document.querySelectorAll('.hint-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                this.toggleHint(index);
            });
        });

        // Test assertion button
        document.getElementById('test-assertion').addEventListener('click', () => {
            this.testAssertion();
        });

        // Clear assertion button
        document.getElementById('clear-assertion').addEventListener('click', () => {
            document.getElementById('assertion-input').value = '';
            document.getElementById('assertion-result').style.display = 'none';
        });

        // Test case examples
        document.querySelectorAll('.test-case-list li').forEach(item => {
            item.addEventListener('click', (e) => {
                document.getElementById('assertion-input').value = e.target.textContent;
            });
        });
    }

    toggleHint(index) {
        const hintContent = document.querySelectorAll('.hint-content')[index];
        const button = document.querySelector(`.hint-btn[data-index="${index}"]`);
        
        hintContent.classList.toggle('show');
        
        if (hintContent.classList.contains('show')) {
            button.innerHTML = '<span class="icon">👁️</span> Hide Hint';
            this.hintCount++;
            this.updateStats();
        } else {
            button.innerHTML = '<span class="icon">💡</span> Show Hint';
        }
    }

    testAssertion() {
        const assertionInput = document.getElementById('assertion-input').value.trim();
        const resultDiv = document.getElementById('assertion-result');
        
        if (!assertionInput) {
            this.showResult('Please enter a JUnit assertion', false);
            return;
        }
        
        this.testCount++;
        
        // Simulate different test outcomes based on input
        if (assertionInput.includes('fail') || assertionInput.includes('Fail')) {
            this.showResult(`Assertion failed: ${assertionInput}`, false);
        } else if (assertionInput.includes('error') || assertionInput.includes('Error')) {
            this.showResult(`Test error: ${assertionInput}`, false);
        } else {
            this.successfulTests++;
            this.showResult(`Assertion passed: ${assertionInput}`, true);
        }
        
        this.updateStats();
    }

    showResult(message, isSuccess) {
        const resultDiv = document.getElementById('assertion-result');
        resultDiv.textContent = message;
        resultDiv.className = isSuccess ? 'result-container success' : 'result-container error';
    }

    updateStats() {
        document.getElementById('total-hints').textContent = this.hintCount;
        document.getElementById('total-tests').textContent = this.testCount;
        
        const successRate = this.testCount > 0 
            ? Math.round((this.successfulTests / this.testCount) * 100)
            : 100;
        document.getElementById('success-rate').textContent = `${successRate}%`;
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new JUnitLearningApp();
});