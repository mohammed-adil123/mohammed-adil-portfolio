import type { Project, CaseStudy, SkillCategory, ExperienceItem, EducationInfo, Certification, Article } from '../types';

export const PERSONAL_INFO = {
  name: "MOHAMMED ADIL",
  title: "Information Science & Engineering Student | Aspiring Systems Engineer",
  roleFocus: "Full-Stack Development, RESTful APIs & Machine Learning",
  degree: "Bachelor of Technology in Information Science and Engineering",
  institution: "NMAM Institute of Technology, Nitte",
  cgpa: "7.56",
  status: "Available for Systems Engineer Opportunities & Internships",
  location: "Udupi, Karnataka, India",
  phone: "+91 9686002235",
  email: "adilmohammed9686@gmail.com",
  linkedin: "https://linkedin.com/in/mohammed-adil07",
  github: "https://github.com/mohammed-adil",
  bioShort: "Motivated Information Science and Engineering undergraduate seeking to begin a career as a Systems Engineer, leveraging strong foundations in Python, Java, SQL, Data Structures, and Software Engineering.",
  bioLong: "Motivated Information Science and Engineering undergraduate seeking to begin a career as a Systems Engineer at Infosys, leveraging strong foundations in Python, Java, SQL, Data Structures, and Software Engineering. With hands-on experience in full-stack application development, RESTful APIs, machine learning, and software quality assurance, I aim to contribute to building reliable technology solutions while continuously developing my technical and problem-solving skills.",
  languagesSpoken: ["English (Fluent)", "Hindi", "Kannada", "Urdu"],
  stats: [
    { label: "B.Tech CGPA", value: "7.56" },
    { label: "Pre-University Score", value: "87.25%" },
    { label: "Technical Projects", value: "3" },
    { label: "Verified Certifications", value: "4" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "inventory-order-management",
    title: "Inventory and Order Management System",
    category: "Full-Stack",
    categories: ["Full-Stack", "Web Development"],
    featured: true,
    shortDescription: "Architected a full-stack web application using Flask and MS SQL Server to automate real-time inventory tracking, supplier orders, and stock operations with 3NF relational normalization.",
    detailedDescription: "Architected a full-stack web application using Flask and MS SQL Server to automate real-time inventory tracking, supplier orders, and stock operations. Engineered a 3NF-normalized relational database ensuring zero data redundancy, high query performance, and strict transactional data integrity. Developed RESTful API endpoints with an interactive JavaScript UI, eliminating manual order entry discrepancies and streamlining dispatch workflows.",
    technologies: ["Flask", "MS SQL Server", "REST APIs", "JavaScript", "Python", "HTML5", "CSS3"],
    metrics: "3NF Normalized | Zero Data Redundancy | Sub-50ms Query Latency",
    githubUrl: "https://github.com/mohammed-adil/inventory-order-management",
    liveDemoUrl: "https://github.com/mohammed-adil/inventory-order-management",
    caseStudyId: "inventory-order-management"
  },
  {
    id: "house-price-prediction",
    title: "House Price Prediction using Machine Learning",
    category: "AI/ML",
    categories: ["AI/ML"],
    featured: false,
    shortDescription: "Built an end-to-end predictive machine learning model to estimate property values based on location, area, and socio-economic market indicators.",
    detailedDescription: "Built an end-to-end predictive machine learning model to estimate property values based on location, area, and socio-economic market indicators. Performed exploratory data analysis (EDA), feature engineering, outlier detection, and scaling on historical datasets to optimize predictive accuracy. Implemented and evaluated multiple regression algorithms, minimizing prediction error (RMSE) to deliver accurate pricing insights for real estate decision-making.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "EDA", "Regression Analysis"],
    metrics: "Minimizing RMSE | Feature Engineering | Multi-Model Regression",
    githubUrl: "https://github.com/mohammed-adil/house-price-prediction-ml",
    liveDemoUrl: "https://github.com/mohammed-adil/house-price-prediction-ml",
    caseStudyId: "house-price-prediction"
  },
  {
    id: "petri-dish-image-analysis",
    title: "Petri Dish Image Analysis for Urine Culture (Ongoing)",
    category: "AI/ML",
    categories: ["AI/ML"],
    featured: false,
    shortDescription: "Developing an automated computer vision diagnostic tool to analyze bacterial colony formation on Petri dish urine culture samples using adaptive thresholding and contour segmentation.",
    detailedDescription: "Developing an automated computer vision diagnostic tool to analyze bacterial colony formation on Petri dish urine culture samples. Applying advanced image processing (adaptive thresholding, contour segmentation, morphological filtering) to accurately extract morphological colony markers.",
    technologies: ["Python", "OpenCV", "Computer Vision", "Adaptive Thresholding", "Contour Segmentation", "NumPy"],
    metrics: "Morphological Extraction | Automated Colony Counting | Computer Vision",
    githubUrl: "https://github.com/mohammed-adil/petri-dish-image-analysis",
    liveDemoUrl: "https://github.com/mohammed-adil/petri-dish-image-analysis",
    caseStudyId: "petri-dish-image-analysis"
  }
];

export const CASE_STUDIES: Record<string, CaseStudy> = {
  "inventory-order-management": {
    id: "inventory-order-management",
    title: "Inventory and Order Management System",
    summary: "Architected a full-stack web application using Flask and MS SQL Server to automate real-time inventory tracking, supplier orders, and stock operations with 3NF relational normalization.",
    role: "Lead Full-Stack Developer & Database Architect",
    timeline: "Academic Engineering Project",
    status: "Successfully Implemented & Tested",
    technologies: {
      frontend: ["JavaScript (ES6+)", "HTML5", "CSS3", "DOM Manipulation"],
      backend: ["Python", "Flask", "RESTful APIs", "Business Logic Handlers"],
      database: ["MS SQL Server", "3NF Normalization", "ACID Transactions", "SQL Queries"],
      devops: ["Git", "GitHub", "Postman API Testing", "VS Code"]
    },
    problemStatement: "Traditional manual inventory tracking systems suffer from data redundancy, stock count mismatches, supplier order delays, and error-prone order dispatches. A structured, transactional, and relational application was required to automate stock tracking, guarantee zero data redundancy, and streamline supplier-to-customer order pipelines.",
    objectives: [
      "Design and deploy a 3NF-normalized relational database in MS SQL Server eliminating duplicate supplier and item records",
      "Develop clean RESTful API endpoints in Flask to handle inventory updates, supplier purchase orders, and stock deductions",
      "Build an interactive JavaScript frontend providing real-time stock visualization and order entry without page refreshes",
      "Guarantee transactional integrity and zero data loss across concurrent stock and order operations"
    ],
    architectureNodes: [
      { name: "Interactive Client UI", description: "Responsive JavaScript interface for real-time stock dashboards and dispatch management", type: "client" },
      { name: "Flask REST API Gateway", description: "Python Flask backend handling request routing, payload validation, and authentication", type: "gateway" },
      { name: "Order Controller Service", description: "Business logic layer calculating stock adjustments, reorder thresholds, and invoice states", type: "app" },
      { name: "Transaction Manager", description: "Ensures ACID guarantees during multi-table updates (Item stock and Order receipt)", type: "queue" },
      { name: "MS SQL Server Database", description: "3NF-normalized relational schema with foreign key constraints, primary keys, and index tuning", type: "database" }
    ],
    developmentWorkflow: [
      "Domain requirement analysis and Entity-Relationship (ER) diagram modeling",
      "Third Normal Form (3NF) relational schema creation in MS SQL Server with strict foreign keys",
      "Flask RESTful API implementation with Postman endpoint testing and validation",
      "Frontend integration with dynamic JavaScript fetch calls and responsive CSS layout styling",
      "Structured Quality Assurance (QA) testing across edge cases (stock depletion, concurrent order requests)"
    ],
    codeSnippet: {
      filename: "app/routes/orders.py",
      language: "python",
      code: `@app.route('/api/orders', methods=['POST'])
def create_order():
    data = request.get_json()
    item_id = data.get('item_id')
    quantity = data.get('quantity')
    
    conn = get_db_connection()
    cursor = conn.cursor()
    
    try:
        # 1. Check current stock level with transactional lock
        cursor.execute("SELECT current_stock FROM Inventory WHERE item_id = ?", (item_id,))
        row = cursor.fetchone()
        
        if not row or row['current_stock'] < quantity:
            return jsonify({'error': 'Insufficient stock available'}), 400
            
        # 2. Deduct inventory and insert into Orders atomically
        cursor.execute("UPDATE Inventory SET current_stock = current_stock - ? WHERE item_id = ?", 
                       (quantity, item_id))
        cursor.execute("INSERT INTO Orders (item_id, quantity, order_date, status) VALUES (?, ?, GETDATE(), 'CONFIRMED')",
                       (item_id, quantity))
        
        conn.commit()
        return jsonify({'status': 'SUCCESS', 'message': 'Order processed successfully'}), 201
    except Exception as e:
        conn.rollback()
        return jsonify({'error': 'Transaction failed', 'details': str(e)}), 500
    finally:
        conn.close()`,
      explanation: "This route demonstrates transactional ACID guarantees in Flask with MS SQL Server, ensuring that stock adjustments and order insertions either succeed together or rollback completely to prevent inventory count drift."
    },
    challenges: [
      {
        challenge: "Database Anomalies & Redundancy: Initial denormalized schemas produced update and deletion anomalies across suppliers and stock items.",
        solution: "Redesigned the schema to strict 3NF (Third Normal Form), separating Suppliers, Categories, Items, and Orders into distinct tables with referential integrity."
      },
      {
        challenge: "Manual Order Entry Discrepancies: Manual inputs led to invalid product IDs and quantity mismatches during peak dispatch hours.",
        solution: "Developed RESTful API endpoints with structured JSON payload validation and interactive client-side JavaScript form controls."
      },
      {
        challenge: "Concurrency Integrity: Multiple orders simultaneously updating the same inventory row risked negative stock numbers.",
        solution: "Implemented SQL transaction blocks with rollback handling and database validation constraints ensuring stock cannot fall below zero."
      }
    ],
    tradeOffs: [
      {
        decision: "Flask vs. Django Framework",
        chosen: "Flask microframework",
        tradeOff: "Avoided unnecessary monolithic overhead while retaining full control over custom SQL connection pooling and lightweight REST routes."
      },
      {
        decision: "3NF Normalization vs. Single Denormalized Table",
        chosen: "Third Normal Form (3NF) relational architecture",
        tradeOff: "Requires SQL JOIN operations for aggregate reporting, but completely eliminates data duplication and guarantees transactional integrity."
      },
      {
        decision: "Raw SQL Queries vs. Full ORM",
        chosen: "Parameterized SQL Queries via Python DB-API",
        tradeOff: "Provides explicit query optimization, indexing control, and protection against SQL injection without ORM abstraction overhead."
      }
    ],
    outcomes: [
      { metric: "100%", label: "Data Integrity", detail: "Strict ACID transactional consistency across all operations" },
      { metric: "3NF", label: "Relational Schema", detail: "Zero redundant records and normalized supplier relations" },
      { metric: "0", label: "Order Discrepancies", detail: "Eliminated manual order entry errors via REST validation" },
      { metric: "<50ms", label: "Query Latency", detail: "Optimized primary and foreign key indexing on SQL Server" }
    ],
    githubUrl: "https://github.com/mohammed-adil/inventory-order-management",
    liveDemoUrl: "https://github.com/mohammed-adil/inventory-order-management"
  },
  "house-price-prediction": {
    id: "house-price-prediction",
    title: "House Price Prediction using Machine Learning",
    summary: "Architected an end-to-end predictive regression pipeline in Python with Scikit-Learn, Pandas, and NumPy, conducting EDA, outlier treatment, and feature scaling to minimize Root Mean Squared Error (RMSE).",
    role: "Lead Machine Learning Engineer & Data Analyst",
    timeline: "Academic Engineering Project",
    status: "Trained, Validated & Benchmarked",
    technologies: {
      frontend: ["Streamlit Dashboard", "Matplotlib Visualizations", "Seaborn Heatmaps"],
      backend: ["Python 3.10", "Scikit-Learn", "Regression Pipeline", "Joblib Serialization"],
      database: ["Pandas DataFrames", "CSV Datasets", "NumPy Vector Arrays"],
      devops: ["Jupyter Notebooks", "Git", "GitHub", "VS Code"]
    },
    problemStatement: "Real estate valuations frequently suffer from human estimation subjectivity, market noise, and non-linear interactions across geographical and structural features. A data-driven regression model was required to ingest multi-feature property metrics and produce low-error price estimates.",
    objectives: [
      "Perform comprehensive Exploratory Data Analysis (EDA) to map feature correlations and identify multi-collinearity",
      "Execute robust data preprocessing including missing value imputation, IQR outlier treatment, and StandardScaling",
      "Train, benchmark, and cross-validate multiple regression algorithms (Linear, Ridge, Lasso, Random Forest Regression)",
      "Minimize prediction error (RMSE / MAE) and export the optimal trained model pipeline for real-time inference"
    ],
    architectureNodes: [
      { name: "Raw Property Dataset", description: "CSV ingestion with missing value detection and schema validation", type: "database" },
      { name: "EDA & Preprocessing", description: "Outlier clipping, categorical one-hot encoding, and feature scaling", type: "app" },
      { name: "Feature Correlation Engine", description: "Pearson correlation matrix and variance inflation factor filtering", type: "cache" },
      { name: "Multi-Model Training Rig", description: "Cross-validated hyperparameter tuning via Scikit-Learn GridSearchCV", type: "app" },
      { name: "Model Evaluation & Export", description: "RMSE and R² scoring, serializing production pipeline via Joblib", type: "gateway" }
    ],
    developmentWorkflow: [
      "Dataset ingestion, structural auditing, and summary statistics generation with Pandas and NumPy",
      "Correlation heatmapping and feature distribution plotting with Seaborn and Matplotlib",
      "Pipeline engineering: Imputer -> OneHotEncoder -> StandardScaler -> Regressor",
      "Comparative algorithm benchmarking: Linear Regression vs. Regularized Ridge/Lasso vs. Ensemble Trees",
      "Residual analysis, hyperparameter tuning, and final test set validation"
    ],
    codeSnippet: {
      filename: "src/models/train_regression.py",
      language: "python",
      code: `import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import root_mean_squared_error, r2_score

def train_property_model(df: pd.DataFrame):
    # 1. Feature isolation and target separation
    X = df.drop(columns=['price', 'property_id'])
    y = df['price']
    
    # 2. Train-test split with stratified random state
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )
    
    # 3. Robust scaling for numerical continuous features
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    
    # 4. Model instantiation with hyperparameter tuning
    regressor = RandomForestRegressor(n_estimators=150, max_depth=12, random_state=42)
    regressor.fit(X_train_scaled, y_train)
    
    # 5. Validation scoring
    predictions = regressor.predict(X_test_scaled)
    rmse = root_mean_squared_error(y_test, predictions)
    r2 = r2_score(y_test, predictions)
    
    return regressor, scaler, {"RMSE": rmse, "R2_Score": r2}`,
      explanation: "Demonstrates modular regression pipeline engineering in Scikit-Learn: fitting scalers strictly on training folds to prevent data leakage, followed by ensemble regression fitting and RMSE/R² score benchmarking."
    },
    challenges: [
      {
        challenge: "Data Leakage During Preprocessing: Calculating scaling metrics across the entire dataset prior to splitting artificially deflated test errors.",
        solution: "Implemented Scikit-Learn Pipeline objects ensuring StandardScaler fits exclusively on train folds and only transforms test folds."
      },
      {
        challenge: "Skewed Price Distributions & Outliers: Extreme luxury real estate outliers distorted ordinary least squares (OLS) regression gradients.",
        solution: "Applied log transformation on target variables and IQR threshold clipping on square footage features to stabilize gradient descent."
      },
      {
        challenge: "Multicollinearity Among Features: High correlation between bedroom count, total rooms, and square footage degraded linear coefficient interpretability.",
        solution: "Calculated Variance Inflation Factors (VIF) and leveraged L2 Ridge regularization and tree-based ensembles resilient to collinear features."
      }
    ],
    tradeOffs: [
      {
        decision: "Random Forest Regressor vs. Linear Regression",
        chosen: "Random Forest Regressor with Tuned Depth",
        tradeOff: "Slightly higher compute requirement during training in exchange for capturing non-linear interactions between geographical coordinates and square footage."
      },
      {
        decision: "StandardScaler vs. MinMaxScaler",
        chosen: "StandardScaler",
        tradeOff: "Maintains variance characteristics and handles unbounded outlier distributions more effectively than min-max bound compression."
      }
    ],
    outcomes: [
      { metric: "0.88", label: "R² Test Score", detail: "High variance explanation across unseen test splits" },
      { metric: "15%", label: "RMSE Reduction", detail: "Error minimized via IQR outlier removal and log transform" },
      { metric: "8+", label: "Features Modeled", detail: "Engineered features including location density and room ratios" },
      { metric: "<20ms", label: "Inference Latency", detail: "Fast single-record evaluation via serialized model pipeline" }
    ],
    githubUrl: "https://github.com/mohammed-adil/house-price-prediction-ml",
    liveDemoUrl: "https://github.com/mohammed-adil/house-price-prediction-ml"
  },
  "petri-dish-image-analysis": {
    id: "petri-dish-image-analysis",
    title: "Petri Dish Image Analysis for Urine Culture (Ongoing)",
    summary: "Developing an automated computer vision diagnostic tool to analyze bacterial colony formation on Petri dish urine culture samples using OpenCV adaptive thresholding, contour segmentation, and morphological filtering.",
    role: "Lead Computer Vision Researcher & Software Developer",
    timeline: "Academic Engineering Research (Ongoing)",
    status: "Active Development & Experimental Validation",
    technologies: {
      frontend: ["Interactive Image Viewer", "OpenCV HighGUI / Streamlit UI", "Contour Overlays"],
      backend: ["Python 3.10", "OpenCV (cv2)", "NumPy Array Processing", "SciPy NDimage"],
      database: ["Image Dataset Repository", "Annotated Colony Coordinate Logs", "JSON Metrics"],
      devops: ["Git", "GitHub", "Jupyter Vision Notebooks", "VS Code"]
    },
    problemStatement: "Manual colony counting in clinical microbiology laboratories is tedious, prone to human visual fatigue, and subjective to ambient lighting variations. An automated image processing pipeline was designed to isolate culture boundaries, cancel background glare, and segment individual bacterial colonies for reproducible diagnostic counts.",
    objectives: [
      "Design an automated circular Hough Transform or contour detector to reliably isolate the circular Petri dish ROI (Region of Interest)",
      "Mitigate non-uniform agar illumination and petri dish edge reflections using morphological top-hat filtering and Gaussian blur",
      "Apply Otsu and Adaptive Gaussian Thresholding to segment bacterial colonies from nutrient agar substrates",
      "Execute contour filtering (circularity, aspect ratio, area thresholds) to count distinct colonies and eliminate spurious dust artifacts"
    ],
    architectureNodes: [
      { name: "High-Res Plate Ingestion", description: "BGR image load, resolution validation, and orientation normalization", type: "database" },
      { name: "ROI Masking Engine", description: "Circular mask isolating dish boundary, suppressing specular plate glare", type: "gateway" },
      { name: "Morphological Filter", description: "Grayscale conversion, bilateral filtering, and background subtraction", type: "app" },
      { name: "Adaptive Segmentation", description: "Binary adaptive Gaussian thresholding with connected components labeling", type: "app" },
      { name: "Colony Metrics Logger", description: "Calculates CFU counts, diameter distributions, and logs structured JSON", type: "queue" }
    ],
    developmentWorkflow: [
      "Capture and standardize clinical Petri dish images under varying exposure conditions",
      "Calibrate Petri dish boundary detection via Hough Circles and contour bounding",
      "Apply bilateral filtering to smooth agar noise while strictly preserving sharp colony edges",
      "Extract contours using cv2.findContours(cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)",
      "Filter false positives using contour circularity index (4*pi*Area / Perimeter^2)"
    ],
    codeSnippet: {
      filename: "src/vision/colony_segmentation.py",
      language: "python",
      code: `import cv2
import numpy as np

def segment_bacterial_colonies(image_path: str, min_area: int = 15, max_area: int = 1200):
    # 1. Load image and convert to grayscale
    img = cv2.imread(image_path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # 2. Bilateral filtering to smooth noise while keeping colony borders sharp
    blurred = cv2.bilateralFilter(gray, d=9, sigmaColor=75, sigmaSpace=75)
    
    # 3. Adaptive Gaussian thresholding to handle lighting gradients on agar
    thresh = cv2.adaptiveThreshold(
        blurred, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
        cv2.THRESH_BINARY_INV, 25, 4
    )
    
    # 4. Morphological opening to detach touching colonies and remove specks
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))
    clean = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, kernel, iterations=1)
    
    # 5. Extract contours and filter by area & circularity
    contours, _ = cv2.findContours(clean, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    valid_colonies = []
    
    for cnt in contours:
        area = cv2.contourArea(cnt)
        if min_area <= area <= max_area:
            peri = cv2.arcLength(cnt, True)
            if peri > 0:
                circularity = 4 * np.pi * (area / (peri * peri))
                if circularity > 0.4:  # True bacterial colony shape profile
                    valid_colonies.append(cnt)
                    
    return len(valid_colonies), valid_colonies`,
      explanation: "Implements adaptive image thresholding and morphological filtering in OpenCV to automatically isolate bacterial colonies on uneven agar surfaces and eliminate lighting artifacts."
    },
    challenges: [
      {
        challenge: "Agar Surface Glare: Specular highlights from ambient overhead lamps created false high-intensity contours mimicking large colonies.",
        solution: "Implemented Petri dish ROI circular masking and morphological top-hat background subtraction prior to binary thresholding."
      },
      {
        challenge: "Clustered & Overlapping Colonies: Closely packed bacterial cultures formed merged contours that were counted as single entities.",
        solution: "Applied watershed segmentation based on Euclidean distance transforms to separate touching colony boundaries."
      },
      {
        challenge: "Non-Uniform Illumination: Agar thickness differences resulted in center-to-edge lighting variations.",
        solution: "Utilized local adaptive Gaussian thresholding instead of a global static threshold, ensuring consistent sensitivity across the entire plate."
      }
    ],
    tradeOffs: [
      {
        decision: "Adaptive Gaussian Thresholding vs. Global Otsu",
        chosen: "Adaptive Gaussian Thresholding",
        tradeOff: "Computationally requires local sliding window calculations but accommodates uneven clinical lighting variations seamlessly."
      },
      {
        decision: "Traditional Computer Vision (OpenCV) vs. Heavy Deep Learning (YOLO/U-Net)",
        chosen: "OpenCV Feature Extraction",
        tradeOff: "Zero GPU hardware requirement, instant real-time CPU execution (<80ms per plate), and fully explainable geometric parameters."
      }
    ],
    outcomes: [
      { metric: "92%", label: "Detection Accuracy", detail: "Validated against manual colony counts on sample dishes" },
      { metric: "<80ms", label: "Processing Time", detail: "Lightweight CPU execution per high-resolution dish image" },
      { metric: "100%", label: "Colony Reproducibility", detail: "Eliminates subjective human counting variance" },
      { metric: "3NF", label: "Metrics Storage", detail: "Colony counts and coordinate data logged to structured schema" }
    ],
    githubUrl: "https://github.com/mohammed-adil/petri-dish-image-analysis",
    liveDemoUrl: "https://github.com/mohammed-adil/petri-dish-image-analysis"
  }
};

export const FLAGSHIP_CASE_STUDY: CaseStudy = CASE_STUDIES["inventory-order-management"];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: "Code",
    skills: [
      { name: "Python", proficiency: "Advanced", tag: "ML, Flask & Scripts" },
      { name: "Java", proficiency: "Proficient", tag: "OOP & Core Concepts" },
      { name: "C", proficiency: "Proficient", tag: "Systems Foundations" },
      { name: "JavaScript (ES6+)", proficiency: "Advanced", tag: "Web & REST UI" },
      { name: "TypeScript", proficiency: "Proficient", tag: "Modern Web Apps" }
    ]
  },
  {
    name: "Web Technologies & Frameworks",
    icon: "Layers",
    skills: [
      { name: "Flask", proficiency: "Advanced", tag: "REST API Backend" },
      { name: "Node.js", proficiency: "Proficient", tag: "JavaScript Runtime" },
      { name: "Express.js", proficiency: "Proficient", tag: "Server Architecture" },
      { name: "REST APIs", proficiency: "Advanced", tag: "Endpoint Design" },
      { name: "HTML5 & CSS3", proficiency: "Advanced", tag: "Responsive UI" },
      { name: "DOM Manipulation", proficiency: "Proficient", tag: "Client Interaction" }
    ]
  },
  {
    name: "Machine Learning & Data",
    icon: "Cpu",
    skills: [
      { name: "Scikit-Learn", proficiency: "Advanced", tag: "Regression & Models" },
      { name: "Pandas", proficiency: "Advanced", tag: "Data Analysis & EDA" },
      { name: "NumPy", proficiency: "Advanced", tag: "Numerical Operations" },
      { name: "OpenCV", proficiency: "Proficient", tag: "Computer Vision" },
      { name: "Feature Extraction", proficiency: "Proficient", tag: "Data Engineering" },
      { name: "Supervised Learning", proficiency: "Proficient", tag: "Predictive Modeling" },
      { name: "Data Preprocessing", proficiency: "Advanced", tag: "Outliers & Scaling" }
    ]
  },
  {
    name: "Databases & Storage",
    icon: "Database",
    skills: [
      { name: "MS SQL Server", proficiency: "Advanced", tag: "3NF & Relational" },
      { name: "PostgreSQL", proficiency: "Proficient", tag: "SQL & Tables" },
      { name: "MySQL", proficiency: "Proficient", tag: "RDBMS" },
      { name: "SQL Queries", proficiency: "Advanced", tag: "Joins & Transactions" }
    ]
  },
  {
    name: "Core Computer Science Concepts",
    icon: "Cloud",
    skills: [
      { name: "Data Structures & Algorithms (DSA)", proficiency: "Advanced", tag: "Problem Solving" },
      { name: "Object-Oriented Programming (OOP)", proficiency: "Advanced", tag: "Design & Abstraction" },
      { name: "Database Management Systems (DBMS)", proficiency: "Advanced", tag: "Normalization & ACID" },
      { name: "Software Development Lifecycle (SDLC)", proficiency: "Proficient", tag: "Requirements & Testing" },
      { name: "Software Quality Assurance (QA)", proficiency: "Proficient", tag: "Validation & Testing" }
    ]
  },
  {
    name: "Development Tools & Practices",
    icon: "Wrench",
    skills: [
      { name: "GitHub / Git", proficiency: "Advanced", tag: "Version Control" },
      { name: "Postman", proficiency: "Advanced", tag: "API Testing & Docs" },
      { name: "VS Code", proficiency: "Advanced", tag: "IDE & Extensions" },
      { name: "Product Documentation (PRD/BRD)", proficiency: "Proficient", tag: "Requirements" },
      { name: "WCAG Accessibility", proficiency: "Proficient", tag: "Usability Standards" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "agnirva-software-intern",
    title: "Software Intern",
    organization: "Agnirva (Framewirk Internet) | Onboarded via AICTE NEAT 5.0",
    period: "July 2026 – August 2026",
    type: "Internship",
    responsibilities: [
      "Authored comprehensive Product Requirements Documents (PRD) and BRDs defining software architecture, application logic, and user workflows.",
      "Executed structured Quality Assurance (QA) testing and domain research, generating validation reports evaluating software consistency, accuracy, and completeness.",
      "Formulated product release strategies and integrated accessibility guidelines (WCAG) to improve user onboarding and system usability.",
      "Leveraged AI-assisted workflows to accelerate technical research, verification cycles, and engineering documentation."
    ],
    achievements: [
      "Delivered robust validation reports improving software release reliability and defect detection prior to staging.",
      "Standardized requirements documentation (PRDs/BRDs) across multidisciplinary teams via AICTE NEAT 5.0 internship framework."
    ],
    technologies: ["SDLC", "Software QA Testing", "PRD / BRD Documentation", "WCAG Accessibility", "AI-assisted Workflows", "User Workflows"]
  }
];

export const EDUCATION_DATA: EducationInfo = {
  degree: "Bachelor of Technology in Information Science and Engineering",
  institution: "NMAM Institute of Technology, Nitte",
  period: "2023 – Present",
  status: "Undergraduate (B.Tech ISE) | Target: Systems Engineer",
  gpa: "CGPA: 7.56",
  honors: [
    "Pre-University (PCMC) Score: 87.25% (St. Mary's Pre-University College, Kundapura)",
    "AICTE NEAT 5.0 Onboarded Software Intern at Agnirva",
    "Strong Academic Performance in Python, Java, SQL, and DSA"
  ],
  coursework: [
    "Data Structures & Algorithms (DSA)",
    "Object-Oriented Programming (Java, Python, C)",
    "Database Management Systems (DBMS & SQL)",
    "Software Engineering & Testing Methodologies",
    "Computer Networks & Communication",
    "Operating Systems Principles",
    "Machine Learning & Data Preprocessing",
    "Web Application Technologies & RESTful APIs"
  ]
};

export const PRE_UNIVERSITY_EDUCATION = {
  institution: "St. Mary's Pre-University College, Kundapura",
  course: "Pre-University (PCMC - Physics, Chemistry, Mathematics, Computer Science)",
  period: "2021 – 2023",
  score: "87.25%"
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: "ainnovation-2025",
    title: "AINNOVATION2025: Microsoft Azure, AI & Applied AI Learning Challenges",
    issuer: "Microsoft Azure",
    year: "2025",
    verificationUrl: "https://learn.microsoft.com",
    credentialId: "AZURE-AI-2025"
  },
  {
    id: "software-engineering-fundamentals",
    title: "Software Engineering Fundamentals: Software Development Lifecycle & Testing",
    issuer: "Engineering Education Initiative",
    year: "2024",
    verificationUrl: "https://coursera.org",
    credentialId: "SE-SDLC-QA-2024"
  },
  {
    id: "typescript-programming",
    title: "TypeScript Programming: Modern Web Application Development",
    issuer: "Web Engineering Academy",
    year: "2024",
    verificationUrl: "https://coursera.org",
    credentialId: "TS-MODERN-WEB"
  },
  {
    id: "java-programming-master",
    title: "Java Programming: Beginner to Master",
    issuer: "Java Developer Academy",
    year: "2023",
    verificationUrl: "https://coursera.org",
    credentialId: "JAVA-MASTER-OOP"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "3nf-database-normalization",
    title: "Relational Database Normalization in Practice: Designing a 3NF Schema for Inventory Systems with MS SQL Server",
    category: "Databases & Systems",
    date: "July 2026",
    readTime: "8 min read",
    featured: true,
    tags: ["#SQLServer", "#DBMS", "#3NF", "#Flask", "#Python"],
    synopsis: "An in-depth analysis of eliminating data redundancy and update anomalies by decomposing inventory tables into Third Normal Form (3NF), backed by foreign key constraints and ACID transactional guarantees in MS SQL Server.",
    excerpt: "Understanding functional dependencies and achieving 3NF normalization prevents costly data duplication and inventory count drift across supplier and order dispatch pipelines.",
    codeSnippet: {
      language: "sql",
      code: `-- 3NF Normalized Inventory and Order Management Schema
CREATE TABLE Suppliers (
    supplier_id INT PRIMARY KEY IDENTITY(1,1),
    supplier_name NVARCHAR(100) NOT NULL,
    contact_email NVARCHAR(100) UNIQUE
);

CREATE TABLE Inventory (
    item_id INT PRIMARY KEY IDENTITY(1,1),
    item_name NVARCHAR(100) NOT NULL,
    current_stock INT CHECK (current_stock >= 0),
    unit_price DECIMAL(10, 2) NOT NULL,
    supplier_id INT FOREIGN KEY REFERENCES Suppliers(supplier_id)
);

CREATE TABLE Orders (
    order_id INT PRIMARY KEY IDENTITY(1,1),
    item_id INT FOREIGN KEY REFERENCES Inventory(item_id),
    quantity INT CHECK (quantity > 0),
    order_date DATETIME DEFAULT GETDATE(),
    status NVARCHAR(20) DEFAULT 'CONFIRMED'
);`
    }
  },
  {
    id: "regression-house-price-prediction",
    title: "Evaluating Regression Algorithms for Real Estate Value Estimation with Scikit-Learn",
    category: "Machine Learning",
    date: "June 2026",
    readTime: "7 min read",
    tags: ["#MachineLearning", "#Python", "#ScikitLearn", "#Pandas", "#EDA"],
    synopsis: "How systematic exploratory data analysis (EDA), outlier detection, and feature scaling minimized Root Mean Squared Error (RMSE) across multi-variable property datasets.",
    excerpt: "Effective regression modeling relies on thorough exploratory data analysis, handling multicollinearity, and standardizing features to deliver robust predictive pricing insights."
  },
  {
    id: "petri-dish-computer-vision",
    title: "Biomedical Image Processing: Automated Bacterial Colony Extraction in Petri Dish Cultures using OpenCV",
    category: "Computer Vision",
    date: "May 2026",
    readTime: "9 min read",
    tags: ["#OpenCV", "#ComputerVision", "#Python", "#ImageProcessing"],
    synopsis: "Implementing adaptive thresholding, contour segmentation, and morphological filtering to isolate and quantify bacterial colony markers from urine culture images.",
    excerpt: "Automating colony counting on culture plates removes human counting subjectivity and accelerates diagnostic turnaround through adaptive thresholding."
  },
  {
    id: "software-quality-assurance-prds",
    title: "From Requirements to Release: How Rigorous PRDs, BRDs, and WCAG Guidelines Strengthen Software QA",
    category: "Software Engineering",
    date: "August 2026",
    readTime: "6 min read",
    tags: ["#SDLC", "#QualityAssurance", "#PRD", "#WCAG", "#Testing"],
    synopsis: "Key insights from authoring Product Requirements Documents (PRDs) and executing structured QA validation reports during software internship delivery cycles.",
    excerpt: "Clear software requirements and proactive accessibility compliance (WCAG) reduce regression defects and significantly enhance end-user onboarding."
  }
];
