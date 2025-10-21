// Modal Templates for VR & AR with Blender Training Programme
// Contains 16 modal HTML templates that match the existing glassmorphism theme

const modalTemplates = {
    // LEARNING OUTCOMES MODALS (6)
    outcome1: `
        <div class="modal-overlay" id="modal-outcome1" onclick="closeModal(event, 'outcome1')">
            <div class="modal" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeModal(event, 'outcome1')">×</button>
                <div class="modal-header">
                    <div class="modal-logo">
                        <img src="logo_WHT.png" alt="Logo" onerror="this.style.display='none'">
                    </div>
                    <h2 class="modal-title">Blender Interface Mastery</h2>
                </div>
                <div class="modal-content">
                    <p style="font-size: 1.1em; margin-bottom: 30px;">Master the Blender interface and become efficient with core tools through systematic training and practice.</p>

                    <div class="modal-section">
                        <h3>Interface Navigation</h3>
                        <ul style="list-style: none; padding: 0; margin-top: 15px;">
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Understand workspace layouts (Modeling, Shading, Animation, etc.)</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Customize your interface for efficient workflow</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Navigate the 3D viewport with precision</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Use quick menus and search functionality</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Master essential keyboard shortcuts</li>
                        </ul>
                    </div>

                    <div class="modal-section">
                        <h3>Core Tool Proficiency</h3>
                        <div class="feature-box">
                            <strong>Selection Tools</strong>
                            <p>Box select, circle select, lasso select, and advanced selection techniques for efficient object and component manipulation.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Transform Tools</strong>
                            <p>Move, rotate, scale with precision using snapping, pivot points, and transformation orientations.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Editing Tools</strong>
                            <p>Extrude, inset, bevel, loop cut, knife tool, and other essential mesh editing operations.</p>
                        </div>
                    </div>

                    <div class="modal-section">
                        <h3>You'll Be Able To:</h3>
                        <p>Navigate Blender confidently without constantly searching for tools. Set up efficient workspace layouts. Execute complex modeling operations quickly using shortcuts and quick menus. Feel comfortable exploring new features independently.</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    outcome2: `
        <div class="modal-overlay" id="modal-outcome2" onclick="closeModal(event, 'outcome2')">
            <div class="modal" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeModal(event, 'outcome2')">×</button>
                <div class="modal-header">
                    <div class="modal-logo">
                        <img src="logo_WHT.png" alt="Logo" onerror="this.style.display='none'">
                    </div>
                    <h2 class="modal-title">3D Modeling Techniques</h2>
                </div>
                <div class="modal-content">
                    <p style="font-size: 1.1em; margin-bottom: 30px;">Learn industry-standard techniques to create clean, efficient 3D models suitable for any application.</p>

                    <div class="modal-section">
                        <h3>Polygon Modeling</h3>
                        <ul style="list-style: none; padding: 0; margin-top: 15px;">
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Build models from primitive shapes</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Understand quad-based topology vs triangles</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Create clean edge flow for deformation</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Use edge loops and face loops effectively</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Master boolean operations for complex shapes</li>
                        </ul>
                    </div>

                    <div class="modal-section">
                        <h3>Modeling Approaches</h3>
                        <div class="feature-box">
                            <strong>Box Modeling</strong>
                            <p>Start with a cube and refine it through subdivision and edge manipulation. Ideal for organic and hard-surface modeling.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Modular Modeling</strong>
                            <p>Create reusable components that can be combined. Essential for game assets and architectural visualization.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Modifier-Based Workflow</strong>
                            <p>Non-destructive modeling using Array, Mirror, Solidify, and Subdivision Surface modifiers for flexible iteration.</p>
                        </div>
                    </div>

                    <div class="modal-section">
                        <h3>Quality Standards</h3>
                        <p>Learn to create models that meet professional standards: clean topology, optimized polygon counts, proper scale and proportions, and consideration for the intended use (real-time vs rendering).</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    outcome3: `
        <div class="modal-overlay" id="modal-outcome3" onclick="closeModal(event, 'outcome3')">
            <div class="modal" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeModal(event, 'outcome3')">×</button>
                <div class="modal-header">
                    <div class="modal-logo">
                        <img src="logo_WHT.png" alt="Logo" onerror="this.style.display='none'">
                    </div>
                    <h2 class="modal-title">Texturing & Materials</h2>
                </div>
                <div class="modal-content">
                    <p style="font-size: 1.1em; margin-bottom: 30px;">Bring your 3D models to life with realistic materials and textures using industry-standard PBR workflows.</p>

                    <div class="modal-section">
                        <h3>UV Unwrapping</h3>
                        <ul style="list-style: none; padding: 0; margin-top: 15px;">
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Understand UV coordinates and texture space</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Create efficient UV layouts with minimal distortion</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Use seam placement strategies for clean unwraps</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Pack UV islands efficiently for texture resolution</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Work with multiple UV maps when needed</li>
                        </ul>
                    </div>

                    <div class="modal-section">
                        <h3>PBR Material Workflow</h3>
                        <div class="feature-box">
                            <strong>Base Color (Albedo)</strong>
                            <p>Create or apply diffuse color information without lighting data. Understand color theory for realistic materials.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Metallic & Roughness</strong>
                            <p>Control how surfaces reflect light. Distinguish between metallic and non-metallic (dielectric) materials.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Normal & Bump Maps</strong>
                            <p>Add surface detail without additional geometry. Create depth and texture through lighting response.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Shader Nodes</strong>
                            <p>Build complex materials using Blender's node-based system. Mix shaders, create procedural textures, and control material properties.</p>
                        </div>
                    </div>

                    <div class="modal-section">
                        <h3>Texture Painting</h3>
                        <p>Paint directly onto your 3D models in Blender. Learn brush settings, layer management, and techniques for creating custom textures without external software.</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    outcome4: `
        <div class="modal-overlay" id="modal-outcome4" onclick="closeModal(event, 'outcome4')">
            <div class="modal" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeModal(event, 'outcome4')">×</button>
                <div class="modal-header">
                    <div class="modal-logo">
                        <img src="logo_WHT.png" alt="Logo" onerror="this.style.display='none'">
                    </div>
                    <h2 class="modal-title">Rigging Fundamentals</h2>
                </div>
                <div class="modal-content">
                    <p style="font-size: 1.1em; margin-bottom: 30px;">Understand how to create skeletal systems that allow your 3D models to move and deform realistically.</p>

                    <div class="modal-section">
                        <h3>Armature Basics</h3>
                        <ul style="list-style: none; padding: 0; margin-top: 15px;">
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Create and edit bone structures</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Understand bone hierarchy and parenting</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Set up forward and inverse kinematics (FK/IK)</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Use bone constraints for complex movements</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Create control bones for animator-friendly rigs</li>
                        </ul>
                    </div>

                    <div class="modal-section">
                        <h3>Weight Painting</h3>
                        <div class="feature-box">
                            <strong>Automatic Weights</strong>
                            <p>Use Blender's automatic weight assignment as a starting point for rigging characters and organic models.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Manual Weight Painting</strong>
                            <p>Refine deformation by painting vertex group weights. Control how mesh vertices respond to bone movement.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Weight Transfer</strong>
                            <p>Copy weight data between similar models. Speed up rigging process for variations of the same character.</p>
                        </div>
                    </div>

                    <div class="modal-section">
                        <h3>Animation Preparation</h3>
                        <p>While this course focuses on rigging basics, you'll understand how proper rigging enables animation. Learn to test your rigs with simple poses and movements to ensure they deform correctly.</p>
                    </div>

                    <div class="modal-section">
                        <h3>Mechanical Rigging</h3>
                        <p>Beyond character rigging, learn to rig mechanical objects using constraints. Create doors that swing, wheels that rotate, and other mechanical movements for props and environments.</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    outcome5: `
        <div class="modal-overlay" id="modal-outcome5" onclick="closeModal(event, 'outcome5')">
            <div class="modal" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeModal(event, 'outcome5')">×</button>
                <div class="modal-header">
                    <div class="modal-logo">
                        <img src="logo_WHT.png" alt="Logo" onerror="this.style.display='none'">
                    </div>
                    <h2 class="modal-title">VR/AR Optimization</h2>
                </div>
                <div class="modal-content">
                    <p style="font-size: 1.1em; margin-bottom: 30px;">Master the critical skill of optimizing 3D assets for real-time performance in virtual and augmented reality applications.</p>

                    <div class="modal-section">
                        <h3>Performance Targets</h3>
                        <div class="feature-box">
                            <strong>Frame Rate Requirements</strong>
                            <p>Understand why VR needs 90fps minimum. Learn to budget performance across polygon counts, texture resolution, and shader complexity.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Platform Constraints</strong>
                            <p>Different platforms have different limits. Mobile VR (Quest) has stricter requirements than PC VR (PCVR, PSVR). Learn to optimize for your target platform.</p>
                        </div>
                    </div>

                    <div class="modal-section">
                        <h3>Optimization Techniques</h3>
                        <ul style="list-style: none; padding: 0; margin-top: 15px;">
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Reduce polygon counts without losing visual quality</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Create LOD (Level of Detail) versions of models</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Optimize texture sizes and compression</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Combine materials to reduce draw calls</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Bake lighting and complex shaders into textures</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Use texture atlasing for better performance</li>
                        </ul>
                    </div>

                    <div class="modal-section">
                        <h3>Testing & Validation</h3>
                        <p>Learn to use Blender's statistics panel to monitor polygon counts and performance metrics. Understand how to test assets in target platforms and iterate based on performance data.</p>
                    </div>

                    <div class="modal-section">
                        <h3>Real-World Application</h3>
                        <p>By the end of this outcome, you'll be able to take any 3D model and prepare it for deployment in VR/AR applications, meeting the technical requirements of different platforms while maintaining visual quality.</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    outcome6: `
        <div class="modal-overlay" id="modal-outcome6" onclick="closeModal(event, 'outcome6')">
            <div class="modal" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeModal(event, 'outcome6')">×</button>
                <div class="modal-header">
                    <div class="modal-logo">
                        <img src="logo_WHT.png" alt="Logo" onerror="this.style.display='none'">
                    </div>
                    <h2 class="modal-title">Export Workflows</h2>
                </div>
                <div class="modal-content">
                    <p style="font-size: 1.1em; margin-bottom: 30px;">Master the technical process of exporting your Blender assets in the correct formats for various VR/AR platforms and game engines.</p>

                    <div class="modal-section">
                        <h3>File Format Expertise</h3>
                        <div class="feature-box">
                            <strong>FBX (.fbx)</strong>
                            <p><strong>Best for:</strong> Unity, Unreal Engine, most game engines<br>
                            <strong>Settings:</strong> Scale, axis conversion, bake animations, mesh modifiers<br>
                            <strong>Use case:</strong> General-purpose 3D asset exchange</p>
                        </div>
                        <div class="feature-box">
                            <strong>glTF 2.0 (.gltf/.glb)</strong>
                            <p><strong>Best for:</strong> WebXR, Three.js, Babylon.js, web-based VR/AR<br>
                            <strong>Settings:</strong> Texture embedding, material properties, draco compression<br>
                            <strong>Use case:</strong> Web platforms, lightweight transmission</p>
                        </div>
                        <div class="feature-box">
                            <strong>USDZ (.usdz)</strong>
                            <p><strong>Best for:</strong> Apple ARKit, iOS AR applications<br>
                            <strong>Settings:</strong> Material conversion, optimization for mobile<br>
                            <strong>Use case:</strong> Apple ecosystem AR experiences</p>
                        </div>
                        <div class="feature-box">
                            <strong>OBJ/Collada (.obj/.dae)</strong>
                            <p><strong>Best for:</strong> Cross-platform compatibility, backup formats<br>
                            <strong>Settings:</strong> Coordinate systems, material export<br>
                            <strong>Use case:</strong> Universal exchange, legacy systems</p>
                        </div>
                    </div>

                    <div class="modal-section">
                        <h3>Export Checklist</h3>
                        <ul style="list-style: none; padding: 0; margin-top: 15px;">
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Apply all transforms before export</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Check coordinate system conversion (Y-up vs Z-up)</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Verify scale units match target platform</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Ensure materials export correctly</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Include or embed textures as needed</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Test imported asset in target engine</li>
                        </ul>
                    </div>

                    <div class="modal-section">
                        <h3>Common Export Issues</h3>
                        <p>Learn to troubleshoot common problems: missing materials, incorrect scale, flipped normals, animation issues, and texture path problems. Understand how to fix these issues both in Blender and in the target platform.</p>
                    </div>

                    <div class="modal-section">
                        <h3>Workflow Integration</h3>
                        <p>Develop a systematic export workflow that ensures consistency across projects. Learn to document export settings for team collaboration and create presets for different target platforms.</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    // PROGRAMME STRUCTURE MODALS (4)
    phase1: `
        <div class="modal-overlay" id="modal-phase1" onclick="closeModal(event, 'phase1')">
            <div class="modal" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeModal(event, 'phase1')">×</button>
                <div class="modal-header">
                    <div class="modal-logo">
                        <img src="logo_WHT.png" alt="Logo" onerror="this.style.display='none'">
                    </div>
                    <h2 class="modal-title">Phase 1: Fundamentals</h2>
                </div>
                <div class="modal-content">
                    <p style="font-size: 1.1em; margin-bottom: 30px;">Build a solid foundation in Blender over four comprehensive weeks. Master the essential skills that every 3D artist needs.</p>

                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-marker">1</div>
                            <div class="timeline-content">
                                <h4>Week 1: Blender Basics & Navigation</h4>
                                <p><strong>Learning Objectives:</strong></p>
                                <ul>
                                    <li>Understand the Blender interface layout and customization options</li>
                                    <li>Master viewport navigation using keyboard and mouse shortcuts</li>
                                    <li>Learn object manipulation: move, rotate, scale, duplicate</li>
                                    <li>Work with primitive shapes and basic mesh editing</li>
                                    <li>Introduction to modifiers (Array, Mirror, Solidify)</li>
                                </ul>
                                <p style="margin-top: 15px;"><strong>Hands-On Project:</strong> Create a simple 3D scene using primitive objects and basic modifiers</p>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-marker">2</div>
                            <div class="timeline-content">
                                <h4>Week 2: 3D Modelling Techniques</h4>
                                <p><strong>Learning Objectives:</strong></p>
                                <ul>
                                    <li>Master polygon modelling workflows and techniques</li>
                                    <li>Understand edge flow and topology for clean models</li>
                                    <li>Work with advanced modifiers (Subdivision Surface, Bevel, Boolean)</li>
                                    <li>Learn non-destructive modelling workflows</li>
                                    <li>Implement proportional editing and sculpting basics</li>
                                </ul>
                                <p style="margin-top: 15px;"><strong>Hands-On Project:</strong> Model a detailed prop or character asset with proper topology</p>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-marker">3</div>
                            <div class="timeline-content">
                                <h4>Week 3: Materials & Texturing</h4>
                                <p><strong>Learning Objectives:</strong></p>
                                <ul>
                                    <li>Introduction to materials, shaders, and the Shader Editor</li>
                                    <li>Master UV unwrapping techniques for texture mapping</li>
                                    <li>Learn texture painting directly in Blender</li>
                                    <li>Create PBR materials using nodes (Metallic, Roughness, Normal maps)</li>
                                    <li>Work with procedural textures and texture coordinates</li>
                                </ul>
                                <p style="margin-top: 15px;"><strong>Hands-On Project:</strong> Fully texture and material a 3D asset with realistic PBR workflow</p>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-marker">4</div>
                            <div class="timeline-content">
                                <h4>Week 4: Rigging Fundamentals</h4>
                                <p><strong>Learning Objectives:</strong></p>
                                <ul>
                                    <li>Understand armatures, bones, and skeletal hierarchy</li>
                                    <li>Learn weight painting and vertex group assignment</li>
                                    <li>Create simple character rigs with IK (Inverse Kinematics)</li>
                                    <li>Work with object constraints for mechanical rigs</li>
                                    <li>Introduction to basic animation principles</li>
                                </ul>
                                <p style="margin-top: 15px;"><strong>Hands-On Project:</strong> Rig and animate a simple character or mechanical object</p>
                            </div>
                        </div>
                    </div>

                    <div class="modal-section">
                        <h3>By the End of Phase 1</h3>
                        <p>You'll have a complete understanding of Blender's core toolset and the ability to create, texture, and rig 3D assets from scratch. You'll be ready to specialize in VR/AR asset creation in Phase 2.</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    phase2: `
        <div class="modal-overlay" id="modal-phase2" onclick="closeModal(event, 'phase2')">
            <div class="modal" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeModal(event, 'phase2')">×</button>
                <div class="modal-header">
                    <div class="modal-logo">
                        <img src="logo_WHT.png" alt="Logo" onerror="this.style.display='none'">
                    </div>
                    <h2 class="modal-title">Phase 2: VR/AR Specialization</h2>
                </div>
                <div class="modal-content">
                    <p style="font-size: 1.1em; margin-bottom: 30px;">Week 5 focuses exclusively on preparing your Blender assets for Virtual Reality and Augmented Reality applications. Learn the critical optimization and export techniques required for real-time performance.</p>

                    <div class="modal-section">
                        <h3>Understanding VR/AR Requirements</h3>
                        <p><strong>What Makes VR/AR Different:</strong></p>
                        <ul style="list-style: none; padding: 0; margin-top: 15px;">
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Real-time rendering constraints (90fps minimum for VR)</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Mobile vs PC VR performance considerations</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Polygon count budgets for different platforms</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Texture resolution and memory limitations</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Draw call optimization strategies</li>
                        </ul>
                    </div>

                    <div class="modal-section">
                        <h3>Optimization Techniques</h3>
                        <div class="feature-box">
                            <strong>Polygon Reduction</strong>
                            <p>Learn to reduce polygon counts while maintaining visual quality using decimation, retopology, and LOD (Level of Detail) techniques.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Texture Optimization</strong>
                            <p>Master texture atlasing, resolution optimization, and compression techniques. Learn when to use texture maps vs procedural materials.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Material Simplification</strong>
                            <p>Convert complex shader networks to VR/AR-friendly materials. Understand PBR workflows for game engines.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Lightmap Baking</strong>
                            <p>Bake lighting information into textures for improved real-time performance without sacrificing visual quality.</p>
                        </div>
                    </div>

                    <div class="modal-section">
                        <h3>Export Workflows</h3>
                        <p><strong>Platform-Specific Exports:</strong></p>
                        <ul style="list-style: none; padding: 0; margin-top: 15px;">
                            <li style="padding: 8px 0; color: #cbd5e1;">• <strong>FBX Export:</strong> Unity, Unreal Engine, and most game engines</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">• <strong>glTF/GLB Export:</strong> Web-based VR (WebXR) and AR applications</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">• <strong>USDZ Export:</strong> Apple ARKit and iOS AR experiences</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">• <strong>OBJ/Collada:</strong> Cross-platform compatibility</li>
                        </ul>
                        <p style="margin-top: 15px;">Learn proper export settings, coordinate system conversions, and how to maintain material properties across platforms.</p>
                    </div>

                    <div class="modal-section">
                        <h3>Platform Requirements</h3>
                        <div class="feature-box">
                            <strong>Meta Quest (Mobile VR)</strong>
                            <p>Target: 50k-100k polygons per scene | Texture: 2048x2048 max | Materials: Mobile-optimized shaders</p>
                        </div>
                        <div class="feature-box">
                            <strong>PC VR (SteamVR, PSVR)</strong>
                            <p>Target: 200k-500k polygons per scene | Texture: 4096x4096 | Materials: Full PBR support</p>
                        </div>
                        <div class="feature-box">
                            <strong>Web AR (8th Wall, AR.js)</strong>
                            <p>Target: 20k-50k polygons | Texture: 1024x1024 | File size: Under 5MB total</p>
                        </div>
                    </div>

                    <div class="modal-section">
                        <h3>Best Practices</h3>
                        <ul style="list-style: none; padding: 0; margin-top: 15px;">
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Always test assets in the target platform early</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Use proxy objects during development for performance</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Maintain organized file structures and naming conventions</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Document optimization decisions for team collaboration</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Create style guides for consistent visual quality</li>
                        </ul>
                    </div>

                    <div class="modal-section">
                        <h3>Hands-On Project</h3>
                        <p>Create a complete VR/AR-ready asset from one of your Phase 1 projects. Optimize it for a specific platform (Quest, WebXR, or PC VR), export it properly, and validate performance metrics.</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    phase3: `
        <div class="modal-overlay" id="modal-phase3" onclick="closeModal(event, 'phase3')">
            <div class="modal" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeModal(event, 'phase3')">×</button>
                <div class="modal-header">
                    <div class="modal-logo">
                        <img src="logo_WHT.png" alt="Logo" onerror="this.style.display='none'">
                    </div>
                    <h2 class="modal-title">Phase 3: Individual Consultations</h2>
                </div>
                <div class="modal-content">
                    <p style="font-size: 1.1em; margin-bottom: 30px;">Week 6 provides dedicated one-to-one time with the instructor. These personalized 30-minute sessions ensure you get the specific support you need to succeed.</p>

                    <div class="modal-section">
                        <h3>Consultation Structure</h3>
                        <div class="feature-box">
                            <strong>Portfolio Review (10 minutes)</strong>
                            <p>Share your best work from the course. Receive professional feedback on composition, technical execution, and areas for improvement. Learn how to present your work effectively.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Technical Deep Dive (10 minutes)</strong>
                            <p>Tackle specific technical challenges you've encountered. Get expert guidance on complex problems, workflow bottlenecks, or advanced techniques relevant to your projects.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Future Planning (10 minutes)</strong>
                            <p>Discuss your career goals and next steps. Get recommendations for continued learning, portfolio development, and opportunities in digital arts and VR/AR industries.</p>
                        </div>
                    </div>

                    <div class="modal-section">
                        <h3>What to Bring</h3>
                        <p><strong>Maximize your consultation time by preparing:</strong></p>
                        <ul style="list-style: none; padding: 0; margin-top: 15px;">
                            <li style="padding: 8px 0; color: #cbd5e1;">📁 2-3 of your best Blender projects from the course</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">❓ Specific questions or challenges you want to address</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">🎯 Goals for your next 3-6 months in digital arts</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">💡 Ideas for future projects you'd like feedback on</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">🔧 Technical issues documented with screenshots if possible</li>
                        </ul>
                    </div>

                    <div class="modal-section">
                        <h3>Common Topics Covered</h3>
                        <div class="feature-box">
                            <strong>Workflow Optimization</strong>
                            <p>Learn shortcuts, add-ons, and techniques to speed up your Blender workflow. Customize your workspace for maximum efficiency.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Advanced Techniques</strong>
                            <p>Explore topics beyond the core curriculum: procedural generation, simulation, advanced rigging, or specialized rendering techniques.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Portfolio Development</strong>
                            <p>Get advice on building a strong portfolio for job applications, freelance work, or grant applications in digital arts.</p>
                        </div>
                    </div>

                    <div class="modal-section">
                        <h3>Scheduling Your Session</h3>
                        <p>During Week 5, you'll receive a booking link to schedule your consultation. Choose from available time slots across mornings, afternoons, and evenings to fit your schedule.</p>
                        <p style="margin-top: 15px; padding: 15px; background: rgba(236, 72, 153, 0.1); border-radius: 8px; border-left: 4px solid #ec4899;">
                            <strong>Pro Tip:</strong> Book your session early in Week 6 if you want feedback before the panel discussion, or later in the week if you want to incorporate panel insights into your consultation.
                        </p>
                    </div>

                    <div class="modal-section">
                        <h3>After Your Consultation</h3>
                        <p>You'll receive a summary email with key takeaways, recommended resources, and action items discussed during your session. Use this as a roadmap for your continued development in Blender and digital arts.</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    phase4: `
        <div class="modal-overlay" id="modal-phase4" onclick="closeModal(event, 'phase4')">
            <div class="modal" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeModal(event, 'phase4')">×</button>
                <div class="modal-header">
                    <div class="modal-logo">
                        <img src="logo_WHT.png" alt="Logo" onerror="this.style.display='none'">
                    </div>
                    <h2 class="modal-title">Phase 4: Industry Panel Discussion</h2>
                </div>
                <div class="modal-content">
                    <p style="font-size: 1.1em; margin-bottom: 30px;">A one-hour panel session with practicing digital artists who use Blender professionally. Gain real-world insights, learn from case studies, and discover career opportunities in the field.</p>

                    <div class="modal-section">
                        <h3>Panel Format</h3>
                        <div class="feature-box">
                            <strong>Panelist Introductions (10 minutes)</strong>
                            <p>Meet 3-4 professional digital artists working in various sectors: game development, VR/AR, film/animation, architectural visualization, or interactive installations.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Case Study Presentations (30 minutes)</strong>
                            <p>Each panelist shares a project where they used Blender, discussing their creative process, technical challenges, collaboration workflows, and final outcomes.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Live Q&A Session (20 minutes)</strong>
                            <p>Ask questions directly to the panel. Topics can range from technical workflows to career advice, freelancing, finding opportunities, and industry trends.</p>
                        </div>
                    </div>

                    <div class="modal-section">
                        <h3>What You'll Learn</h3>
                        <ul style="list-style: none; padding: 0; margin-top: 15px;">
                            <li style="padding: 8px 0; color: #cbd5e1;">💼 How professionals use Blender in different industries</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">🎨 Real-world project workflows from concept to completion</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">🤝 Collaboration techniques with clients and creative teams</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">⚡ Problem-solving strategies for technical challenges</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">📈 Career paths and progression in digital arts</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">🌍 Current trends in VR/AR and immersive experiences</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">💡 Tips for building a professional portfolio and finding work</li>
                        </ul>
                    </div>

                    <div class="modal-section">
                        <h3>Sample Topics from Past Panels</h3>
                        <div class="feature-box">
                            <strong>VR Experience Design</strong>
                            <p>"Creating an interactive museum exhibition in VR using Blender and Unreal Engine - from concept art to final deployment"</p>
                        </div>
                        <div class="feature-box">
                            <strong>Architectural Visualization</strong>
                            <p>"Using Blender for real-time architectural walkthroughs: workflow, client collaboration, and presentation strategies"</p>
                        </div>
                        <div class="feature-box">
                            <strong>Game Asset Creation</strong>
                            <p>"Building a complete game environment: optimized assets, modular design, and integration with Unity"</p>
                        </div>
                        <div class="feature-box">
                            <strong>AR Mobile Applications</strong>
                            <p>"Developing AR furniture visualization app: 3D modelling, optimization for mobile, and user testing insights"</p>
                        </div>
                    </div>

                    <div class="modal-section">
                        <h3>Questions You Can Ask</h3>
                        <p><strong>Career & Business:</strong></p>
                        <ul style="list-style: none; padding: 0; margin-top: 10px;">
                            <li style="padding: 5px 0; color: #cbd5e1;">• How did you get started in digital arts professionally?</li>
                            <li style="padding: 5px 0; color: #cbd5e1;">• How do you find and pitch to clients?</li>
                            <li style="padding: 5px 0; color: #cbd5e1;">• What's your pricing strategy for different types of projects?</li>
                        </ul>
                        <p style="margin-top: 15px;"><strong>Technical & Creative:</strong></p>
                        <ul style="list-style: none; padding: 0; margin-top: 10px;">
                            <li style="padding: 5px 0; color: #cbd5e1;">• What's your daily workflow in Blender?</li>
                            <li style="padding: 5px 0; color: #cbd5e1;">• Which add-ons or tools do you rely on most?</li>
                            <li style="padding: 5px 0; color: #cbd5e1;">• How do you handle creative blocks or technical challenges?</li>
                        </ul>
                        <p style="margin-top: 15px;"><strong>Industry Insights:</strong></p>
                        <ul style="list-style: none; padding: 0; margin-top: 10px;">
                            <li style="padding: 5px 0; color: #cbd5e1;">• What skills are most in-demand right now?</li>
                            <li style="padding: 5px 0; color: #cbd5e1;">• How is AI affecting the digital arts industry?</li>
                            <li style="padding: 5px 0; color: #cbd5e1;">• What trends should we watch in VR/AR?</li>
                        </ul>
                    </div>

                    <div class="modal-section">
                        <h3>Networking Opportunity</h3>
                        <p>After the formal panel, there's an informal 10-15 minute networking period where you can connect with panelists via chat. Exchange contact information, share your portfolio, or continue conversations started during Q&A.</p>
                        <p style="margin-top: 15px; padding: 15px; background: rgba(236, 72, 153, 0.1); border-radius: 8px; border-left: 4px solid #ec4899;">
                            <strong>Pro Tip:</strong> Prepare your questions in advance and have your portfolio link ready to share. This is a valuable opportunity to make connections in the industry!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `,

    // TARGET AUDIENCE MODALS (2)
    audience: `
        <div class="modal-overlay" id="modal-audience" onclick="closeModal(event, 'audience')">
            <div class="modal" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeModal(event, 'audience')">×</button>
                <div class="modal-header">
                    <div class="modal-logo">
                        <img src="logo_WHT.png" alt="Logo" onerror="this.style.display='none'">
                    </div>
                    <h2 class="modal-title">Who Should Apply</h2>
                </div>
                <div class="modal-content">
                    <p style="font-size: 1.1em; margin-bottom: 30px;">Digital Artists looking to incorporate Blender into their practice, or Digital Artists with limited Blender experience looking to upskill. Digital Artists are those defined under the Dig Arts Policy.</p>
                </div>
            </div>
        </div>
    `,

    requirements: `
        <div class="modal-overlay" id="modal-requirements" onclick="closeModal(event, 'requirements')">
            <div class="modal" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeModal(event, 'requirements')">×</button>
                <div class="modal-header">
                    <div class="modal-logo">
                        <img src="logo_WHT.png" alt="Logo" onerror="this.style.display='none'">
                    </div>
                    <h2 class="modal-title">Technical Requirements</h2>
                </div>
                <div class="modal-content">
                    <p style="font-size: 1.1em; margin-bottom: 30px;">Ensure you have the right hardware and software setup to participate fully in the programme.</p>

                    <div class="modal-section">
                        <h3>Computer Specifications</h3>
                        <div class="feature-box">
                            <strong>Minimum Requirements</strong>
                            <p><strong>OS:</strong> Windows 10/11, macOS 11+, or Linux<br>
                            <strong>Processor:</strong> 64-bit quad-core CPU<br>
                            <strong>RAM:</strong> 8 GB (16 GB recommended)<br>
                            <strong>GPU:</strong> 2 GB VRAM with OpenGL 4.3 support<br>
                            <strong>Storage:</strong> 5 GB free space for Blender + project files<br>
                            <strong>Display:</strong> 1920x1080 resolution minimum</p>
                        </div>
                        <div class="feature-box">
                            <strong>Recommended Specifications</strong>
                            <p><strong>Processor:</strong> Modern multi-core CPU (Intel i5/i7, AMD Ryzen 5/7, or M1/M2 Mac)<br>
                            <strong>RAM:</strong> 16-32 GB for smoother workflow<br>
                            <strong>GPU:</strong> NVIDIA GTX 1060 / AMD RX 580 or better (4+ GB VRAM)<br>
                            <strong>Display:</strong> Dual monitors (improves workflow significantly)</p>
                        </div>
                    </div>

                    <div class="modal-section">
                        <h3>Essential Hardware</h3>
                        <ul style="list-style: none; padding: 0; margin-top: 15px;">
                            <li style="padding: 8px 0; color: #cbd5e1;">🖱️ <strong>Computer Mouse (Required):</strong> 3-button mouse with scroll wheel - trackpads are not suitable for 3D work</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">🎧 <strong>Headphones/Headset:</strong> For clear audio during online sessions</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">🎤 <strong>Microphone:</strong> Built-in or external for participation and questions</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">📶 <strong>Stable Internet:</strong> Minimum 10 Mbps download, 5 Mbps upload for video conferencing</li>
                        </ul>
                    </div>

                    <div class="modal-section">
                        <h3>Optional but Helpful</h3>
                        <div class="feature-box">
                            <strong>Drawing Tablet</strong>
                            <p>Wacom, Huion, or similar tablet improves texture painting and sculpting workflows. Not required for the core programme.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Second Monitor</strong>
                            <p>Dramatically improves workflow by allowing you to have Blender on one screen and reference/tutorials on another.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Numeric Keypad</strong>
                            <p>External numpad for laptops without one - useful for viewport navigation shortcuts.</p>
                        </div>
                    </div>

                    <div class="modal-section">
                        <h3>Software Requirements</h3>
                        <p><strong>Blender 4.x (Free & Open Source)</strong><br>
                        Download from blender.org before the first session. We'll cover installation and setup in Week 1.</p>
                        <p style="margin-top: 15px;"><strong>Video Conferencing Software</strong><br>
                        Zoom, Google Meet, or Microsoft Teams (details provided upon acceptance)</p>
                        <p style="margin-top: 15px;"><strong>No Additional Software Required</strong><br>
                        Blender includes all tools needed for modeling, texturing, rigging, and rendering. No paid software needed!</p>
                    </div>

                    <div class="modal-section">
                        <h3>Pre-Programme Setup</h3>
                        <p><strong>Upon acceptance, you'll receive:</strong></p>
                        <ul style="list-style: none; padding: 0; margin-top: 15px;">
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Detailed installation guide for Blender</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ System testing checklist</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Video conferencing platform setup instructions</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Basic keyboard shortcut reference sheet</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Technical support contact for any issues</li>
                        </ul>
                    </div>

                    <div class="modal-section">
                        <h3>Having Technical Issues?</h3>
                        <p style="padding: 15px; background: rgba(236, 72, 153, 0.1); border-radius: 8px; border-left: 4px solid #ec4899;">
                            Not sure if your computer meets the requirements? Include your system specs in your application and we'll help you determine if it's suitable or suggest upgrades.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `,

    // DELIVERY FORMAT MODALS (4)
    delivery1: `
        <div class="modal-overlay" id="modal-delivery1" onclick="closeModal(event, 'delivery1')">
            <div class="modal" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeModal(event, 'delivery1')">×</button>
                <div class="modal-header">
                    <div class="modal-logo">
                        <img src="logo_WHT.png" alt="Logo" onerror="this.style.display='none'">
                    </div>
                    <h2 class="modal-title">Online Delivery</h2>
                </div>
                <div class="modal-content">
                    <p style="font-size: 1.1em; margin-bottom: 30px;">All sessions are delivered online via professional video conferencing platforms, making the programme accessible regardless of your location.</p>

                    <div class="modal-section">
                        <h3>Platform Features</h3>
                        <div class="feature-box">
                            <strong>High-Quality Video & Audio</strong>
                            <p>Professional streaming with HD video and clear audio. See the instructor's screen in detail as they demonstrate techniques in Blender.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Screen Sharing</strong>
                            <p>Instructor shares their Blender workspace in real-time. Participants can also share screens for troubleshooting and feedback.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Interactive Features</strong>
                            <p>Chat for questions, reactions for feedback, breakout rooms for small group work, and polls for checking understanding.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Recording & Playback</strong>
                            <p>All sessions are recorded and available within 24 hours. Review at your own pace, catch up if you miss something, or revisit complex topics.</p>
                        </div>
                    </div>

                    <div class="modal-section">
                        <h3>Benefits of Online Learning</h3>
                        <ul style="list-style: none; padding: 0; margin-top: 15px;">
                            <li style="padding: 8px 0; color: #cbd5e1;">🏠 <strong>Learn from Anywhere:</strong> No travel time or costs - join from home or studio</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">💻 <strong>Work in Your Environment:</strong> Use your own computer setup and workspace</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">📹 <strong>Recorded Sessions:</strong> Never miss critical information - review recordings anytime</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">🌍 <strong>Geographic Flexibility:</strong> Connect with participants from different regions</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">💬 <strong>Digital Resources:</strong> Easy sharing of files, links, and supplementary materials</li>
                        </ul>
                    </div>

                    <div class="modal-section">
                        <h3>Best Practices for Online Sessions</h3>
                        <p><strong>Before Sessions:</strong></p>
                        <ul style="list-style: none; padding: 0; margin-top: 10px;">
                            <li style="padding: 5px 0; color: #cbd5e1;">• Test your internet connection and video conferencing software</li>
                            <li style="padding: 5px 0; color: #cbd5e1;">• Have Blender open and ready</li>
                            <li style="padding: 5px 0; color: #cbd5e1;">• Prepare questions from previous sessions or practice</li>
                        </ul>
                        <p style="margin-top: 15px;"><strong>During Sessions:</strong></p>
                        <ul style="list-style: none; padding: 0; margin-top: 10px;">
                            <li style="padding: 5px 0; color: #cbd5e1;">• Use headphones to avoid echo and improve audio quality</li>
                            <li style="padding: 5px 0; color: #cbd5e1;">• Keep video on when possible for engagement</li>
                            <li style="padding: 5px 0; color: #cbd5e1;">• Use chat for questions without interrupting</li>
                            <li style="padding: 5px 0; color: #cbd5e1;">• Follow along in Blender as techniques are demonstrated</li>
                        </ul>
                    </div>

                    <div class="modal-section">
                        <h3>Technical Support</h3>
                        <p>If you experience any technical difficulties during sessions, our support team is available via chat. Common issues (audio, video, connection) can usually be resolved quickly without missing content.</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    delivery2: `
        <div class="modal-overlay" id="modal-delivery2" onclick="closeModal(event, 'delivery2')">
            <div class="modal" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeModal(event, 'delivery2')">×</button>
                <div class="modal-header">
                    <div class="modal-logo">
                        <img src="logo_WHT.png" alt="Logo" onerror="this.style.display='none'">
                    </div>
                    <h2 class="modal-title">Small Class Sizes</h2>
                </div>
                <div class="modal-content">
                    <p style="font-size: 1.1em; margin-bottom: 30px;">With a maximum of 12-15 participants per cohort, you'll receive personalized attention and support throughout the programme.</p>

                    <div class="modal-section">
                        <h3>Why Small Classes Matter</h3>
                        <div class="feature-box">
                            <strong>Individual Attention</strong>
                            <p>Instructor can check in with each participant during practice sessions, answer specific questions, and provide targeted feedback on your work.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Real-Time Troubleshooting</strong>
                            <p>When you encounter technical issues or get stuck, help is immediate. No waiting in long queues or submitting tickets.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Peer Learning</strong>
                            <p>Small groups foster collaboration and community. Learn from classmates' questions and approaches. Build lasting professional connections.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Flexible Pacing</strong>
                            <p>With fewer students, the instructor can adjust pacing based on the group's needs - slowing down for complex topics or moving faster when everyone's ready.</p>
                        </div>
                    </div>

                    <div class="modal-section">
                        <h3>Class Dynamics</h3>
                        <p><strong>Cohort-Based Learning:</strong> Progress through the programme with the same group. This builds camaraderie, shared language, and mutual support.</p>
                        <p style="margin-top: 15px;"><strong>Diverse Perspectives:</strong> Small classes allow for diverse backgrounds and experience levels while maintaining quality instruction. Learn from others' creative approaches.</p>
                        <p style="margin-top: 15px;"><strong>Safe Learning Environment:</strong> Smaller groups create psychological safety - feel comfortable asking "basic" questions, sharing work-in-progress, and experimenting without judgment.</p>
                    </div>

                    <div class="modal-section">
                        <h3>Instructor Availability</h3>
                        <ul style="list-style: none; padding: 0; margin-top: 15px;">
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Direct access to instructor during all sessions</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Personalized feedback on exercises and projects</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Support forum access between sessions</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">✓ Dedicated one-to-one consultation in Week 6</li>
                        </ul>
                    </div>

                    <div class="modal-section">
                        <h3>Community Building</h3>
                        <p>Small class sizes enable genuine professional relationships. Past participants have collaborated on projects, shared opportunities, and continued supporting each other long after programme completion.</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    delivery3: `
        <div class="modal-overlay" id="modal-delivery3" onclick="closeModal(event, 'delivery3')">
            <div class="modal" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeModal(event, 'delivery3')">×</button>
                <div class="modal-header">
                    <div class="modal-logo">
                        <img src="logo_WHT.png" alt="Logo" onerror="this.style.display='none'">
                    </div>
                    <h2 class="modal-title">Session Length & Structure</h2>
                </div>
                <div class="modal-content">
                    <p style="font-size: 1.1em; margin-bottom: 30px;">Each session runs 2.5-3 hours, carefully structured to balance instruction, practice, and breaks for optimal learning.</p>

                    <div class="modal-section">
                        <h3>Typical Session Structure</h3>
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-marker" style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); width: 60px; border-radius: 8px;">00:00</div>
                                <div class="timeline-content">
                                    <h4>Welcome & Review (10 minutes)</h4>
                                    <p>Quick recap of previous session, answer questions from practice assignments, preview today's topics.</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-marker" style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); width: 60px; border-radius: 8px;">00:10</div>
                                <div class="timeline-content">
                                    <h4>Core Instruction (45-60 minutes)</h4>
                                    <p>Live demonstration of new techniques and concepts. Instructor works in Blender while explaining, with participants following along at their own pace.</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-marker" style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); width: 60px; border-radius: 8px;">01:10</div>
                                <div class="timeline-content">
                                    <h4>Break (10 minutes)</h4>
                                    <p>Step away from screen, rest eyes, grab a drink. Mental break to absorb information.</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-marker" style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); width: 60px; border-radius: 8px;">01:20</div>
                                <div class="timeline-content">
                                    <h4>Guided Practice (60-75 minutes)</h4>
                                    <p>Hands-on exercises applying what was demonstrated. Instructor circulates virtually, providing individual help and feedback.</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-marker" style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); width: 60px; border-radius: 8px;">02:35</div>
                                <div class="timeline-content">
                                    <h4>Wrap-Up & Q&A (15-25 minutes)</h4>
                                    <p>Share work, discuss challenges, preview next session, assign practice exercises for the week.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal-section">
                        <h3>Why 2.5-3 Hours?</h3>
                        <div class="feature-box">
                            <strong>Deep Learning</strong>
                            <p>Complex 3D concepts require time to explain, demonstrate, practice, and troubleshoot. Shorter sessions wouldn't allow for meaningful hands-on work.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Balanced Pace</strong>
                            <p>Long enough to cover substantial material, short enough to maintain focus. Structured breaks prevent fatigue.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Practice Time</strong>
                            <p>Adequate in-session practice with instructor support is crucial. This isn't a watch-and-learn format - you'll actively work in Blender.</p>
                        </div>
                    </div>

                    <div class="modal-section">
                        <h3>Managing Energy & Focus</h3>
                        <ul style="list-style: none; padding: 0; margin-top: 15px;">
                            <li style="padding: 8px 0; color: #cbd5e1;">☕ Have water/tea/coffee available</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">💺 Ensure comfortable seating for extended work</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">💡 Proper lighting to reduce eye strain</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">🔕 Minimize distractions during sessions</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">🧘 Use break time to stretch and move</li>
                        </ul>
                    </div>

                    <div class="modal-section">
                        <h3>Flexible Participation</h3>
                        <p><strong>Can't Stay the Full Time?</strong> While we encourage full attendance, life happens. Sessions are recorded, so you can review anything you miss.</p>
                        <p style="margin-top: 15px;"><strong>Need Extra Help?</strong> If you need more time with certain concepts, recordings allow you to pause, rewind, and practice at your own pace between sessions.</p>
                    </div>

                    <div class="modal-section">
                        <h3>Between-Session Work</h3>
                        <p>Expect to spend 2-3 hours between sessions practicing and completing optional exercises. This self-paced work reinforces learning and prepares you for the next session.</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    delivery4: `
        <div class="modal-overlay" id="modal-delivery4" onclick="closeModal(event, 'delivery4')">
            <div class="modal" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeModal(event, 'delivery4')">×</button>
                <div class="modal-header">
                    <div class="modal-logo">
                        <img src="logo_WHT.png" alt="Logo" onerror="this.style.display='none'">
                    </div>
                    <h2 class="modal-title">Programme Schedule</h2>
                </div>
                <div class="modal-content">
                    <p style="font-size: 1.1em; margin-bottom: 30px;">Weekly sessions over 6 consecutive weeks create consistent rhythm and momentum for learning complex 3D skills.</p>

                    <div class="modal-section">
                        <h3>Weekly Cadence Benefits</h3>
                        <div class="feature-box">
                            <strong>Consistent Learning Rhythm</strong>
                            <p>Meeting weekly maintains momentum without overwhelming you. Enough time to practice between sessions but not so long that you forget what you learned.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Skill Building Progression</strong>
                            <p>Each week builds directly on previous weeks. By session 5, you'll see how all the pieces connect - from basic modeling to final VR/AR-ready assets.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Habit Formation</strong>
                            <p>Six weeks is long enough to develop sustainable Blender practice habits that continue after the programme ends.</p>
                        </div>
                        <div class="feature-box">
                            <strong>Manageable Commitment</strong>
                            <p>A 6-week intensive is achievable even with busy schedules. Clear start and end dates help with planning.</p>
                        </div>
                    </div>

                    <div class="modal-section">
                        <h3>Typical Weekly Pattern</h3>
                        <p style="padding: 20px; background: rgba(59, 130, 246, 0.1); border-radius: 10px; border-left: 4px solid #3b82f6;">
                            <strong>Monday:</strong> Watch previous session recording if needed, review notes<br>
                            <strong>Tuesday-Thursday:</strong> Practice exercises, experiment with techniques (2-3 hours total)<br>
                            <strong>Friday:</strong> Prepare questions for upcoming session<br>
                            <strong>[Session Day]:</strong> Attend live session (2.5-3 hours)<br>
                            <strong>Post-Session:</strong> Review your work, start next practice assignment
                        </p>
                    </div>

                    <div class="modal-section">
                        <h3>Scheduling Flexibility</h3>
                        <p><strong>Consistent Day & Time:</strong> Sessions occur on the same day at the same time each week. This predictability helps with scheduling and builds routine.</p>
                        <p style="margin-top: 15px;"><strong>Time Preference Survey:</strong> Before the programme starts, participants complete a survey about their preferred days (weekday evenings, weekends) and times. Schedule is set based on majority availability.</p>
                        <p style="margin-top: 15px;"><strong>Common Schedule Options:</strong></p>
                        <ul style="list-style: none; padding: 0; margin-top: 10px;">
                            <li style="padding: 5px 0; color: #cbd5e1;">• Weekday Evening: 6:30 PM - 9:00/9:30 PM</li>
                            <li style="padding: 5px 0; color: #cbd5e1;">• Saturday Morning: 10:00 AM - 12:30/1:00 PM</li>
                            <li style="padding: 5px 0; color: #cbd5e1;">• Sunday Afternoon: 2:00 PM - 4:30/5:00 PM</li>
                        </ul>
                    </div>

                    <div class="modal-section">
                        <h3>Missed Sessions</h3>
                        <p><strong>Life Happens:</strong> If you must miss a session, full recordings are available within 24 hours. You can catch up asynchronously.</p>
                        <p style="margin-top: 15px;"><strong>Stay Connected:</strong> Review the recording before the next session and reach out via the support forum with questions. Use your 1:1 consultation to get additional help if you missed multiple sessions.</p>
                        <p style="margin-top: 15px; padding: 15px; background: rgba(236, 72, 153, 0.1); border-radius: 8px; border-left: 4px solid #ec4899;">
                            <strong>Recommendation:</strong> Try to attend all live sessions if possible. The real-time interaction, immediate feedback, and community learning are valuable parts of the experience that recordings can't fully replicate.
                        </p>
                    </div>

                    <div class="modal-section">
                        <h3>Time Commitment Summary</h3>
                        <ul style="list-style: none; padding: 0; margin-top: 15px;">
                            <li style="padding: 8px 0; color: #cbd5e1;">📅 <strong>Duration:</strong> 6 weeks total</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">🎓 <strong>Live Sessions:</strong> 5 group sessions (2.5-3 hours each) = 12.5-15 hours</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">👤 <strong>Consultation:</strong> 1 individual session (30 minutes)</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">👥 <strong>Panel Discussion:</strong> 1 hour</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">💻 <strong>Practice Time:</strong> 2-3 hours per week = 10-15 hours total</li>
                            <li style="padding: 8px 0; color: #cbd5e1;">⏱️ <strong>Total Investment:</strong> Approximately 24-31 hours over 6 weeks</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
};

// Modal Injection Function
function injectModals() {
    // Get the body element
    const body = document.body;

    // Create a container for all modals
    const modalContainer = document.createElement('div');
    modalContainer.id = 'modal-container';

    // Inject all modal templates into the container
    for (const modalKey in modalTemplates) {
        modalContainer.innerHTML += modalTemplates[modalKey];
    }

    // Append the modal container to the body
    body.appendChild(modalContainer);

    console.log('✓ All 16 modals have been injected into the DOM');
    console.log('✓ Modal IDs:', Object.keys(modalTemplates).join(', '));
}

// Auto-inject modals when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectModals);
} else {
    // DOM is already loaded
    injectModals();
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { modalTemplates, injectModals };
}
