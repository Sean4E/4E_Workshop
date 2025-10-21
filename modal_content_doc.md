# Modal Content Reference Document
## VR & AR with Blender Training Programme

This document contains all content for the 16 additional modals to be created in `modals.js`.

---

## LEARNING OUTCOMES MODALS (6)

### Modal ID: outcome1
**Title:** Blender Interface Mastery

**Intro Text:**
Master the Blender interface and become efficient with core tools through systematic training and practice.

**Section 1: Interface Navigation**
- Understand workspace layouts (Modeling, Shading, Animation, etc.)
- Customize your interface for efficient workflow
- Navigate the 3D viewport with precision
- Use quick menus and search functionality
- Master essential keyboard shortcuts

**Section 2: Core Tool Proficiency**

**Feature Box 1:**
- **Title:** Selection Tools
- **Content:** Box select, circle select, lasso select, and advanced selection techniques for efficient object and component manipulation.

**Feature Box 2:**
- **Title:** Transform Tools
- **Content:** Move, rotate, scale with precision using snapping, pivot points, and transformation orientations.

**Feature Box 3:**
- **Title:** Editing Tools
- **Content:** Extrude, inset, bevel, loop cut, knife tool, and other essential mesh editing operations.

**Section 3: You'll Be Able To:**
Navigate Blender confidently without constantly searching for tools. Set up efficient workspace layouts. Execute complex modeling operations quickly using shortcuts and quick menus. Feel comfortable exploring new features independently.

---

### Modal ID: outcome2
**Title:** 3D Modeling Techniques

**Intro Text:**
Learn industry-standard techniques to create clean, efficient 3D models suitable for any application.

**Section 1: Polygon Modeling**
- Build models from primitive shapes
- Understand quad-based topology vs triangles
- Create clean edge flow for deformation
- Use edge loops and face loops effectively
- Master boolean operations for complex shapes

**Section 2: Modeling Approaches**

**Feature Box 1:**
- **Title:** Box Modeling
- **Content:** Start with a cube and refine it through subdivision and edge manipulation. Ideal for organic and hard-surface modeling.

**Feature Box 2:**
- **Title:** Modular Modeling
- **Content:** Create reusable components that can be combined. Essential for game assets and architectural visualization.

**Feature Box 3:**
- **Title:** Modifier-Based Workflow
- **Content:** Non-destructive modeling using Array, Mirror, Solidify, and Subdivision Surface modifiers for flexible iteration.

**Section 3: Quality Standards**
Learn to create models that meet professional standards: clean topology, optimized polygon counts, proper scale and proportions, and consideration for the intended use (real-time vs rendering).

---

### Modal ID: outcome3
**Title:** Texturing & Materials

**Intro Text:**
Bring your 3D models to life with realistic materials and textures using industry-standard PBR workflows.

**Section 1: UV Unwrapping**
- Understand UV coordinates and texture space
- Create efficient UV layouts with minimal distortion
- Use seam placement strategies for clean unwraps
- Pack UV islands efficiently for texture resolution
- Work with multiple UV maps when needed

**Section 2: PBR Material Workflow**

**Feature Box 1:**
- **Title:** Base Color (Albedo)
- **Content:** Create or apply diffuse color information without lighting data. Understand color theory for realistic materials.

**Feature Box 2:**
- **Title:** Metallic & Roughness
- **Content:** Control how surfaces reflect light. Distinguish between metallic and non-metallic (dielectric) materials.

**Feature Box 3:**
- **Title:** Normal & Bump Maps
- **Content:** Add surface detail without additional geometry. Create depth and texture through lighting response.

**Feature Box 4:**
- **Title:** Shader Nodes
- **Content:** Build complex materials using Blender's node-based system. Mix shaders, create procedural textures, and control material properties.

**Section 3: Texture Painting**
Paint directly onto your 3D models in Blender. Learn brush settings, layer management, and techniques for creating custom textures without external software.

---

### Modal ID: outcome4
**Title:** Rigging Fundamentals

**Intro Text:**
Understand how to create skeletal systems that allow your 3D models to move and deform realistically.

**Section 1: Armature Basics**
- Create and edit bone structures
- Understand bone hierarchy and parenting
- Set up forward and inverse kinematics (FK/IK)
- Use bone constraints for complex movements
- Create control bones for animator-friendly rigs

**Section 2: Weight Painting**

**Feature Box 1:**
- **Title:** Automatic Weights
- **Content:** Use Blender's automatic weight assignment as a starting point for rigging characters and organic models.

**Feature Box 2:**
- **Title:** Manual Weight Painting
- **Content:** Refine deformation by painting vertex group weights. Control how mesh vertices respond to bone movement.

**Feature Box 3:**
- **Title:** Weight Transfer
- **Content:** Copy weight data between similar models. Speed up rigging process for variations of the same character.

**Section 3: Animation Preparation**
While this course focuses on rigging basics, you'll understand how proper rigging enables animation. Learn to test your rigs with simple poses and movements to ensure they deform correctly.

**Section 4: Mechanical Rigging**
Beyond character rigging, learn to rig mechanical objects using constraints. Create doors that swing, wheels that rotate, and other mechanical movements for props and environments.

---

### Modal ID: outcome5
**Title:** VR/AR Optimization

**Intro Text:**
Master the critical skill of optimizing 3D assets for real-time performance in virtual and augmented reality applications.

**Section 1: Performance Targets**

**Feature Box 1:**
- **Title:** Frame Rate Requirements
- **Content:** Understand why VR needs 90fps minimum. Learn to budget performance across polygon counts, texture resolution, and shader complexity.

**Feature Box 2:**
- **Title:** Platform Constraints
- **Content:** Different platforms have different limits. Mobile VR (Quest) has stricter requirements than PC VR (PCVR, PSVR). Learn to optimize for your target platform.

**Section 2: Optimization Techniques**
- Reduce polygon counts without losing visual quality
- Create LOD (Level of Detail) versions of models
- Optimize texture sizes and compression
- Combine materials to reduce draw calls
- Bake lighting and complex shaders into textures
- Use texture atlasing for better performance

**Section 3: Testing & Validation**
Learn to use Blender's statistics panel to monitor polygon counts and performance metrics. Understand how to test assets in target platforms and iterate based on performance data.

**Section 4: Real-World Application**
By the end of this outcome, you'll be able to take any 3D model and prepare it for deployment in VR/AR applications, meeting the technical requirements of different platforms while maintaining visual quality.

---

### Modal ID: outcome6
**Title:** Export Workflows

**Intro Text:**
Master the technical process of exporting your Blender assets in the correct formats for various VR/AR platforms and game engines.

**Section 1: File Format Expertise**

**Feature Box 1:**
- **Title:** FBX (.fbx)
- **Content:** 
  - **Best for:** Unity, Unreal Engine, most game engines
  - **Settings:** Scale, axis conversion, bake animations, mesh modifiers
  - **Use case:** General-purpose 3D asset exchange

**Feature Box 2:**
- **Title:** glTF 2.0 (.gltf/.glb)
- **Content:**
  - **Best for:** WebXR, Three.js, Babylon.js, web-based VR/AR
  - **Settings:** Texture embedding, material properties, draco compression
  - **Use case:** Web platforms, lightweight transmission

**Feature Box 3:**
- **Title:** USDZ (.usdz)
- **Content:**
  - **Best for:** Apple ARKit, iOS AR applications
  - **Settings:** Material conversion, optimization for mobile
  - **Use case:** Apple ecosystem AR experiences

**Feature Box 4:**
- **Title:** OBJ/Collada (.obj/.dae)
- **Content:**
  - **Best for:** Cross-platform compatibility, backup formats
  - **Settings:** Coordinate systems, material export
  - **Use case:** Universal exchange, legacy systems

**Section 2: Export Checklist**
- Apply all transforms before export
- Check coordinate system conversion (Y-up vs Z-up)
- Verify scale units match target platform
- Ensure materials export correctly
- Include or embed textures as needed
- Test imported asset in target engine

**Section 3: Common Export Issues**
Learn to troubleshoot common problems: missing materials, incorrect scale, flipped normals, animation issues, and texture path problems. Understand how to fix these issues both in Blender and in the target platform.

**Section 4: Workflow Integration**
Develop a systematic export workflow that ensures consistency across projects. Learn to document export settings for team collaboration and create presets for different target platforms.

---

## PROGRAMME STRUCTURE MODALS (4)

### Modal ID: phase1
**Title:** Phase 1: Fundamentals

**Intro Text:**
Build a solid foundation in Blender over four comprehensive weeks. Master the essential skills that every 3D artist needs.

**Section 1: Week 1: Blender Basics & Navigation**

**Learning Objectives:**
- Understand the Blender interface layout and customization options
- Master viewport navigation using keyboard and mouse shortcuts
- Learn object manipulation: move, rotate, scale, duplicate
- Work with primitive shapes and basic mesh editing
- Introduction to modifiers (Array, Mirror, Solidify)

**Hands-On Project:**
Create a simple 3D scene using primitive objects and basic modifiers

**Section 2: Week 2: 3D Modelling Techniques**

**Learning Objectives:**
- Master polygon modelling workflows and techniques
- Understand edge flow and topology for clean models
- Work with advanced modifiers (Subdivision Surface, Bevel, Boolean)
- Learn non-destructive modelling workflows
- Implement proportional editing and sculpting basics

**Hands-On Project:**
Model a detailed prop or character asset with proper topology

**Section 3: Week 3: Materials & Texturing**

**Learning Objectives:**
- Introduction to materials, shaders, and the Shader Editor
- Master UV unwrapping techniques for texture mapping
- Learn texture painting directly in Blender
- Create PBR materials using nodes (Metallic, Roughness, Normal maps)
- Work with procedural textures and texture coordinates

**Hands-On Project:**
Fully texture and material a 3D asset with realistic PBR workflow

**Section 4: Week 4: Rigging Fundamentals**

**Learning Objectives:**
- Understand armatures, bones, and skeletal hierarchy
- Learn weight painting and vertex group assignment
- Create simple character rigs with IK (Inverse Kinematics)
- Work with object constraints for mechanical rigs
- Introduction to basic animation principles

**Hands-On Project:**
Rig and animate a simple character or mechanical object

**Section 5: By the End of Phase 1**
You'll have a complete understanding of Blender's core toolset and the ability to create, texture, and rig 3D assets from scratch. You'll be ready to specialize in VR/AR asset creation in Phase 2.

---

### Modal ID: phase2
**Title:** Phase 2: VR/AR Specialization

**Intro Text:**
Week 5 focuses exclusively on preparing your Blender assets for Virtual Reality and Augmented Reality applications. Learn the critical optimization and export techniques required for real-time performance.

**Section 1: Understanding VR/AR Requirements**

**What Makes VR/AR Different:**
- Real-time rendering constraints (90fps minimum for VR)
- Mobile vs PC VR performance considerations
- Polygon count budgets for different platforms
- Texture resolution and memory limitations
- Draw call optimization strategies

**Section 2: Optimization Techniques**

**Feature Box 1:**
- **Title:** Polygon Reduction
- **Content:** Learn to reduce polygon counts while maintaining visual quality using decimation, retopology, and LOD (Level of Detail) techniques.

**Feature Box 2:**
- **Title:** Texture Optimization
- **Content:** Master texture atlasing, resolution optimization, and compression techniques. Learn when to use texture maps vs procedural materials.

**Feature Box 3:**
- **Title:** Material Simplification
- **Content:** Convert complex shader networks to VR/AR-friendly materials. Understand PBR workflows for game engines.

**Feature Box 4:**
- **Title:** Lightmap Baking
- **Content:** Bake lighting information into textures for improved real-time performance without sacrificing visual quality.

**Section 3: Export Workflows**

**Platform-Specific Exports:**
- **FBX Export:** Unity, Unreal Engine, and most game engines
- **glTF/GLB Export:** Web-based VR (WebXR) and AR applications
- **USDZ Export:** Apple ARKit and iOS AR experiences
- **OBJ/Collada:** Cross-platform compatibility

Learn proper export settings, coordinate system conversions, and how to maintain material properties across platforms.

**Section 4: Platform Requirements**

**Feature Box 1:**
- **Title:** Meta Quest (Mobile VR)
- **Content:** Target: 50k-100k polygons per scene | Texture: 2048x2048 max | Materials: Mobile-optimized shaders

**Feature Box 2:**
- **Title:** PC VR (SteamVR, PSVR)
- **Content:** Target: 200k-500k polygons per scene | Texture: 4096x4096 | Materials: Full PBR support

**Feature Box 3:**
- **Title:** Web AR (8th Wall, AR.js)
- **Content:** Target: 20k-50k polygons | Texture: 1024x1024 | File size: Under 5MB total

**Section 5: Best Practices**
- Always test assets in the target platform early
- Use proxy objects during development for performance
- Maintain organized file structures and naming conventions
- Document optimization decisions for team collaboration
- Create style guides for consistent visual quality

**Section 6: Hands-On Project**
Create a complete VR/AR-ready asset from one of your Phase 1 projects. Optimize it for a specific platform (Quest, WebXR, or PC VR), export it properly, and validate performance metrics.

---

### Modal ID: phase3
**Title:** Phase 3: Individual Consultations

**Intro Text:**
Week 6 provides dedicated one-to-one time with the instructor. These personalized 30-minute sessions ensure you get the specific support you need to succeed.

**Section 1: Consultation Structure**

**Feature Box 1:**
- **Title:** Portfolio Review (10 minutes)
- **Content:** Share your best work from the course. Receive professional feedback on composition, technical execution, and areas for improvement. Learn how to present your work effectively.

**Feature Box 2:**
- **Title:** Technical Deep Dive (10 minutes)
- **Content:** Tackle specific technical challenges you've encountered. Get expert guidance on complex problems, workflow bottlenecks, or advanced techniques relevant to your projects.

**Feature Box 3:**
- **Title:** Future Planning (10 minutes)
- **Content:** Discuss your career goals and next steps. Get recommendations for continued learning, portfolio development, and opportunities in digital arts and VR/AR industries.

**Section 2: What to Bring**

**Maximize your consultation time by preparing:**
- 📁 2-3 of your best Blender projects from the course
- ❓ Specific questions or challenges you want to address
- 🎯 Goals for your next 3-6 months in digital arts
- 💡 Ideas for future projects you'd like feedback on
- 🔧 Technical issues documented with screenshots if possible

**Section 3: Common Topics Covered**

**Feature Box 1:**
- **Title:** Workflow Optimization
- **Content:** Learn shortcuts, add-ons, and techniques to speed up your Blender workflow. Customize your workspace for maximum efficiency.

**Feature Box 2:**
- **Title:** Advanced Techniques
- **Content:** Explore topics beyond the core curriculum: procedural generation, simulation, advanced rigging, or specialized rendering techniques.

**Feature Box 3:**
- **Title:** Portfolio Development
- **Content:** Get advice on building a strong portfolio for job applications, freelance work, or grant applications in digital arts.

**Feature Box 4:**
- **Title:** Career Pathways
- **Content:** Discuss opportunities in game development, VR/AR, film/animation, architectural visualization, product design, and more.

**Section 4: Scheduling Your Session**
During Week 5, you'll receive a booking link to schedule your consultation. Choose from available time slots across mornings, afternoons, and evenings to fit your schedule.

**Pro Tip Box:**
Book your session early in Week 6 if you want feedback before the panel discussion, or later in the week if you want to incorporate panel insights into your consultation.

**Section 5: After Your Consultation**
You'll receive a summary email with key takeaways, recommended resources, and action items discussed during your session. Use this as a roadmap for your continued development in Blender and digital arts.

---

### Modal ID: phase4
**Title:** Phase 4: Industry Panel Discussion

**Intro Text:**
A one-hour panel session with practicing digital artists who use Blender professionally. Gain real-world insights, learn from case studies, and discover career opportunities in the field.

**Section 1: Panel Format**

**Feature Box 1:**
- **Title:** Panelist Introductions (10 minutes)
- **Content:** Meet 3-4 professional digital artists working in various sectors: game development, VR/AR, film/animation, architectural visualization, or interactive installations.

**Feature Box 2:**
- **Title:** Case Study Presentations (30 minutes)
- **Content:** Each panelist shares a project where they used Blender, discussing their creative process, technical challenges, collaboration workflows, and final outcomes.

**Feature Box 3:**
- **Title:** Live Q&A Session (20 minutes)
- **Content:** Ask questions directly to the panel. Topics can range from technical workflows to career advice, freelancing, finding opportunities, and industry trends.

**Section 2: What You'll Learn**
- 💼 How professionals use Blender in different industries
- 🎨 Real-world project workflows from concept to completion
- 🤝 Collaboration techniques with clients and creative teams
- ⚡ Problem-solving strategies for technical challenges
- 📈 Career paths and progression in digital arts
- 🌍 Current trends in VR/AR and immersive experiences
- 💡 Tips for building a professional portfolio and finding work

**Section 3: Sample Topics from Past Panels**

**Feature Box 1:**
- **Title:** VR Experience Design
- **Content:** "Creating an interactive museum exhibition in VR using Blender and Unreal Engine - from concept art to final deployment"

**Feature Box 2:**
- **Title:** Architectural Visualization
- **Content:** "Using Blender for real-time architectural walkthroughs: workflow, client collaboration, and presentation strategies"

**Feature Box 3:**
- **Title:** Game Asset Creation
- **Content:** "Building a complete game environment: optimized assets, modular design, and integration with Unity"

**Feature Box 4:**
- **Title:** AR Mobile Applications
- **Content:** "Developing AR furniture visualization app: 3D modelling, optimization for mobile, and user testing insights"

**Section 4: Questions You Can Ask**

**Career & Business:**
- How did you get started in digital arts professionally?
- How do you find and pitch to clients?
- What's your pricing strategy for different types of projects?

**Technical & Creative:**
- What's your daily workflow in Blender?
- Which add-ons or tools do you rely on most?
- How do you handle creative blocks or technical challenges?

**Industry Insights:**
- What skills are most in-demand right now?
- How is AI affecting the digital arts industry?
- What trends should we watch in VR/AR?

**Section 5: Networking Opportunity**
After the formal panel, there's an informal 10-15 minute networking period where you can connect with panelists via chat. Exchange contact information, share your portfolio, or continue conversations started during Q&A.

**Pro Tip Box:**
Prepare your questions in advance and have your portfolio link ready to share. This is a valuable opportunity to make connections in the industry!

---

## TARGET AUDIENCE MODALS (2)

### Modal ID: audience
**Title:** Who Should Apply

**Intro Text:**
This programme is designed for artists ready to expand into digital 3D creation, regardless of their current medium or experience level with technology.

**Section 1: Perfect For:**

**Feature Box 1:**
- **Title:** Digital Artists
- **Content:** Those already working in digital mediums (digital painting, graphic design, photography) who want to add 3D skills to their toolkit.

**Feature Box 2:**
- **Title:** Traditional Artists Transitioning
- **Content:** Painters, sculptors, illustrators, and other visual artists exploring digital tools and VR/AR as new creative mediums.

**Feature Box 3:**
- **Title:** Creative Professionals
- **Content:** Designers, architects, educators, or content creators who see potential in 3D and immersive technologies for their work.

**Feature Box 4:**
- **Title:** Career Changers
- **Content:** Individuals looking to pivot into digital arts, game development, VR/AR industries, or related creative technology fields.

**Section 2: What We're Looking For**
- 🎨 **Creative Practice:** Active engagement in any form of visual arts (traditional or digital)
- 💡 **Motivation:** Clear interest in VR/AR and digital art creation
- ⏰ **Commitment:** Ability to attend all sessions and practice between classes
- 🖥️ **Basic Tech Skills:** Comfortable using computers, installing software, managing files
- 🎯 **Goals:** Specific ideas for how you'd use Blender in your practice

**Section 3: Experience Level**

**No 3D Experience Required** - This is a beginner-friendly programme. We start from the basics and build systematically.

**Previous 3D Experience?** If you have some Blender or 3D software experience, you'll still benefit from the structured curriculum, VR/AR specialization, and professional guidance. Use consultation time for advanced topics.

**Section 4: Application Process**
Submit a portfolio showing your current artistic practice (can be traditional or digital work). Complete a brief questionnaire about your goals and interest in Blender/VR/AR. Applications are reviewed to ensure a good fit and to build a cohort with complementary skills and perspectives.

---

### Modal ID: requirements
**Title:** Technical Requirements

**Intro Text:**
Ensure you have the right hardware and software setup to participate fully in the programme.

**Section 1: Computer Specifications**

**Feature Box 1:**
- **Title:** Minimum Requirements
- **Content:**
  - **OS:** Windows 10/11, macOS 11+, or Linux
  - **Processor:** 64-bit quad-core CPU
  - **RAM:** 8 GB (16 GB recommended)
  - **GPU:** 2 GB VRAM with OpenGL 4.3 support
  - **Storage:** 5 GB free space for Blender + project files
  - **Display:** 1920x1080 resolution minimum

**Feature Box 2:**
- **Title:** Recommended Specifications
- **Content:**
  - **Processor:** Modern multi-core CPU (Intel i5/i7, AMD Ryzen 5/7, or M1/M2 Mac)
  - **RAM:** 16-32 GB for smoother workflow
  - **GPU:** NVIDIA GTX 1060 / AMD RX 580 or better (4+ GB VRAM)
  - **Display:** Dual monitors (improves workflow significantly)

**Section 2: Essential Hardware**
- 🖱️ **Computer Mouse (Required):** 3-button mouse with scroll wheel - trackpads are not suitable for 3D work
- 🎧 **Headphones/Headset:** For clear audio during online sessions
- 🎤 **Microphone:** Built-in or external for participation and questions
- 📶 **Stable Internet:** Minimum 10 Mbps download, 5 Mbps upload for video conferencing

**Section 3: Optional but Helpful**

**Feature Box 1:**
- **Title:** Drawing Tablet
- **Content:** Wacom, Huion, or similar tablet improves texture painting and sculpting workflows. Not required for the core programme.

**Feature Box 2:**
- **Title:** Second Monitor
- **Content:** Dramatically improves workflow by allowing you to have Blender on one screen and reference/tutorials on another.

**Feature Box 3:**
- **Title:** Numeric Keypad
- **Content:** External numpad for laptops without one - useful for viewport navigation shortcuts.

**Section 4: Software Requirements**

**Blender 4.x (Free & Open Source)**
Download from blender.org before the first session. We'll cover installation and setup in Week 1.

**Video Conferencing Software**
Zoom, Google Meet, or Microsoft Teams (details provided upon acceptance)

**No Additional Software Required**
Blender includes all tools needed for modeling, texturing, rigging, and rendering. No paid software needed!

**Section 5: Pre-Programme Setup**

**Upon acceptance, you'll receive:**
- Detailed installation guide for Blender
- System testing checklist
- Video conferencing platform setup instructions
- Basic keyboard shortcut reference sheet
- Technical support contact for any issues

**Section 6: Having Technical Issues?**

**Help Box:**
Not sure if your computer meets the requirements? Include your system specs in your application and we'll help you determine if it's suitable or suggest upgrades.

---

## DELIVERY FORMAT MODALS (4)

### Modal ID: delivery1
**Title:** Online Delivery

**Intro Text:**
All sessions are delivered online via professional video conferencing platforms, making the programme accessible regardless of your location.

**Section 1: Platform Features**

**Feature Box 1:**
- **Title:** High-Quality Video & Audio
- **Content:** Professional streaming with HD video and clear audio. See the instructor's screen in detail as they demonstrate techniques in Blender.

**Feature Box 2:**
- **Title:** Screen Sharing
- **Content:** Instructor shares their Blender workspace in real-time. Participants can also share screens for troubleshooting and feedback.

**Feature Box 3:**
- **Title:** Interactive Features
- **Content:** Chat for questions, reactions for feedback, breakout rooms for small group work, and polls for checking understanding.

**Feature Box 4:**
- **Title:** Recording & Playback
- **Content:** All sessions are recorded and available within 24 hours. Review at your own pace, catch up if you miss something, or revisit complex topics.

**Section 2: Benefits of Online Learning**
- 🏠 **Learn from Anywhere:** No travel time or costs - join from home or studio
- 💻 **Work in Your Environment:** Use your own computer setup and workspace
- 📹 **Recorded Sessions:** Never miss critical information - review recordings anytime
- 🌍 **Geographic Flexibility:** Connect with participants from different regions
- 💬 **Digital Resources:** Easy sharing of files, links, and supplementary materials

**Section 3: Best Practices for Online Sessions**

**Before Sessions:**
- Test your internet connection and video conferencing software
- Have Blender open and ready
- Prepare questions from previous sessions or practice

**During Sessions:**
- Use headphones to avoid echo and improve audio quality
- Keep video on when possible for engagement
- Use chat for questions without interrupting
- Follow along in Blender as techniques are demonstrated

**Section 4: Technical Support**
If you experience any technical difficulties during sessions, our support team is available via chat. Common issues (audio, video, connection) can usually be resolved quickly without missing content.

---

### Modal ID: delivery2
**Title:** Small Class Sizes

**Intro Text:**
With a maximum of 12-15 participants per cohort, you'll receive personalized attention and support throughout the programme.

**Section 1: Why Small Classes Matter**

**Feature Box 1:**
- **Title:** Individual Attention
- **Content:** Instructor can check in with each participant during practice sessions, answer specific questions, and provide targeted feedback on your work.

**Feature Box 2:**
- **Title:** Real-Time Troubleshooting
- **Content:** When you encounter technical issues or get stuck, help is immediate. No waiting in long queues or submitting tickets.

**Feature Box 3:**
- **Title:** Peer Learning
- **Content:** Small groups foster collaboration and community. Learn from classmates' questions and approaches. Build lasting professional connections.

**Feature Box 4:**
- **Title:** Flexible Pacing
- **Content:** With fewer students, the instructor can adjust pacing based on the group's needs - slowing down for complex topics or moving faster when everyone's ready.

**Section 2: Class Dynamics**

**Cohort-Based Learning:** Progress through the programme with the same group. This builds camaraderie, shared language, and mutual support.

**Diverse Perspectives:** Small classes allow for diverse backgrounds and experience levels while maintaining quality instruction. Learn from others' creative approaches.

**Safe Learning Environment:** Smaller groups create psychological safety - feel comfortable asking "basic" questions, sharing work-in-progress, and experimenting without judgment.

**Section 3: Instructor Availability**
- Direct access to instructor during all sessions
- Personalized feedback on exercises and projects
- Support forum access between sessions
- Dedicated one-to-one consultation in Week 6

**Section 4: Comparison: Small vs Large Classes**

**Grid Layout:**

**Column 1: Our Class Size (12-15)**
- ✓ Personal attention
- ✓ Real-time help
- ✓ Know classmates
- ✓ Flexible pacing

**Column 2: Typical Online Courses (50+)**
- • Limited interaction
- • Delayed support
- • Anonymous learning
- • Fixed pace

**Section 5: Community Building**
Small class sizes enable genuine professional relationships. Past participants have collaborated on projects, shared opportunities, and continued supporting each other long after programme completion.

---

### Modal ID: delivery3
**Title:** Session Length & Structure

**Intro Text:**
Each session runs 2.5-3 hours, carefully structured to balance instruction, practice, and breaks for optimal learning.

**Section 1: Typical Session Structure**

**Timeline Item 1:**
- **Time:** 00:00
- **Title:** Welcome & Review (10 minutes)
- **Content:** Quick recap of previous session, answer questions from practice assignments, preview today's topics.

**Timeline Item 2:**
- **Time:** 00:10
- **Title:** Core Instruction (45-60 minutes)
- **Content:** Live demonstration of new techniques and concepts. Instructor works in Blender while explaining, with participants following along at their own pace.

**Timeline Item 3:**
- **Time:** 01:10
- **Title:** Break (10 minutes)
- **Content:** Step away from screen, rest eyes, grab a drink. Mental break to absorb information.

**Timeline Item 4:**
- **Time:** 01:20
- **Title:** Guided Practice (60-75 minutes)
- **Content:** Hands-on exercises applying what was demonstrated. Instructor circulates virtually, providing individual help and feedback.

**Timeline Item 5:**
- **Time:** 02:35
- **Title:** Wrap-Up & Q&A (15-25 minutes)
- **Content:** Share work, discuss challenges, preview next session, assign practice exercises for the week.

**Section 2: Why 2.5-3 Hours?**

**Feature Box 1:**
- **Title:** Deep Learning
- **Content:** Complex 3D concepts require time to explain, demonstrate, practice, and troubleshoot. Shorter sessions wouldn't allow for meaningful hands-on work.

**Feature Box 2:**
- **Title:** Balanced Pace
- **Content:** Long enough to cover substantial material, short enough to maintain focus. Structured breaks prevent fatigue.

**Feature Box 3:**
- **Title:** Practice Time
- **Content:** Adequate in-session practice with instructor support is crucial. This isn't a watch-and-learn format - you'll actively work in Blender.

**Section 3: Managing Energy & Focus**
- ☕ Have water/tea/coffee available
- 💺 Ensure comfortable seating for extended work
- 💡 Proper lighting to reduce eye strain
- 🔕 Minimize distractions during sessions
- 🧘 Use break time to stretch and move

**Section 4: Flexible Participation**

**Can't Stay the Full Time?** While we encourage full attendance, life happens. Sessions are recorded, so you can review anything you miss.

**Need Extra Help?** If you need more time with certain concepts, recordings allow you to pause, rewind, and practice at your own pace between sessions.

**Section 5: Between-Session Work**
Expect to spend 2-3 hours between sessions practicing and completing optional exercises. This self-paced work reinforces learning and prepares you for the next session.

---

### Modal ID: delivery4
**Title:** Programme Schedule

**Intro Text:**
Weekly sessions over 6 consecutive weeks create consistent rhythm and momentum for learning complex 3D skills.

**Section 1: Weekly Cadence Benefits**

**Feature Box 1:**
- **Title:** Consistent Learning Rhythm
- **Content:** Meeting weekly maintains momentum without overwhelming you. Enough time to practice between sessions but not so long that you forget what you learned.

**Feature Box 2:**
- **Title:** Skill Building Progression
- **Content:** Each week builds directly on previous weeks. By session 5, you'll see how all the pieces connect - from basic modeling to final VR/AR-ready assets.

**Feature Box 3:**
- **Title:** Habit Formation
- **Content:** Six weeks is long enough to develop sustainable Blender practice habits that continue after the programme ends.

**Feature Box 4:**
- **Title:** Manageable Commitment
- **Content:** A 6-week intensive is achievable even with busy schedules. Clear start and end dates help with planning.

**Section 2: Typical Weekly Pattern**

**Highlight Box:**
- **Monday:** Watch previous session recording if needed, review notes
- **Tuesday-Thursday:** Practice exercises, experiment with techniques (2-3 hours total)
- **Friday:** Prepare questions for upcoming session
- **[Session Day]:** Attend live session (2.5-3 hours)
- **Post-Session:** Review your work, start next practice assignment

**Section 3: Scheduling Flexibility**

**Consistent Day & Time:** Sessions occur on the same day at the same time each week. This predictability helps with scheduling and builds routine.

**Time Preference Survey:** Before the programme starts, participants complete a survey about their preferred days (weekday evenings, weekends) and times. Schedule is set based on majority availability.

**Common Schedule Options:**
- Weekday Evening: 6:30 PM - 9:00/9:30 PM
- Saturday Morning: 10:00 AM - 12:30/1:00 PM
- Sunday Afternoon: 2:00 PM - 4:30/5:00 PM

**Section 4: Missed Sessions**

**Life Happens:** If you must miss a session, full recordings are available within 24 hours. You can catch up asynchronously.

**Stay Connected:** Review the recording before the next session and reach out via the support forum with questions. Use your 1:1 consultation to get additional help if you missed multiple sessions.

**Recommendation Box:**
Try to attend all live sessions if possible. The real-time interaction, immediate feedback, and community learning are valuable parts of the experience that recordings can't fully replicate.

**Section 5: Time Commitment Summary**
- 📅 **Duration:** 6 weeks total
- 🎓 **Live Sessions:** 5 group sessions (2.5-3 hours each) = 12.5-15 hours
- 👤 **Consultation:** 1 individual session (30 minutes)
- 👥 **Panel Discussion:** 1 hour
- 💻 **Practice Time:** 2-3 hours per week = 10-15 hours total
- ⏱️ **Total Investment:** Approximately 24-31 hours over 6 weeks

---

## STYLING NOTES

All modals should use:
- Modal overlay with glassmorphism background
- Modal header with logo and gradient title
- Timeline items for sequential content
- Feature boxes for highlighted information
- Modal sections for grouped content
- Consistent spacing and typography
- Mobile responsive design

Refer to the existing 3 modals (weeks, sessions, consultations) in index.html for exact styling patterns.