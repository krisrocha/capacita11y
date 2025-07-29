import React from 'react';
import { X, Type, Contrast, MonitorPlay, Keyboard, Volume2, Moon, Sun } from 'lucide-react';
import { useAccessibility } from '../../context/AccessibilityContext';

interface AccessibilityPanelProps {
  onClose: () => void;
}

const AccessibilityPanel: React.FC<AccessibilityPanelProps> = ({ onClose }) => {
  const { preferences, updatePreferences, resetPreferences, darkMode, toggleDarkMode } = useAccessibility();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    updatePreferences({
      [name]: type === 'checkbox' ? checked : value,
    } as any);
  };

  return (
    <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-md animate-slide-up">
      <div className="container-tight py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 id="accessibility-panel-title" className="text-xl font-semibold text-gray-900 dark:text-gray-100">Accessibility Settings</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Close accessibility panel"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <div className="flex items-center mb-2">
                <Type className="h-5 w-5 text-primary-500 dark:text-primary-400 mr-2" />
                <label htmlFor="textSize" className="form-label">Text Size</label>
              </div>
              <select
                id="textSize"
                name="textSize"
                value={preferences.textSize}
                onChange={handleChange}
                className="form-select"
                aria-describedby="text-size-description"
              >
                <option value="normal">Normal</option>
                <option value="large">Large</option>
                <option value="larger">Larger</option>
              </select>
              <p id="text-size-description" className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Adjust the size of text throughout the platform
              </p>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="highContrast"
                name="highContrast"
                checked={preferences.highContrast}
                onChange={handleChange}
                className="form-checkbox"
              />
              <div className="ml-3">
                <label htmlFor="highContrast" className="form-label flex items-center">
                  <Contrast className="h-5 w-5 text-primary-500 dark:text-primary-400 mr-2" />
                  High Contrast
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enhance visual distinction between elements
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="reduceMotion"
                name="reduceMotion"
                checked={preferences.reduceMotion}
                onChange={handleChange}
                className="form-checkbox"
              />
              <div className="ml-3">
                <label htmlFor="reduceMotion" className="form-label flex items-center">
                  <MonitorPlay className="h-5 w-5 text-primary-500 dark:text-primary-400 mr-2" />
                  Reduce Motion
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Minimize animations and transitions
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="darkModeToggle"
                name="darkModeToggle"
                checked={darkMode}
                onChange={toggleDarkMode}
                className="form-checkbox"
              />
              <div className="ml-3">
                <label htmlFor="darkModeToggle" className="form-label flex items-center">
                  {darkMode ? <Moon className="h-5 w-5 text-primary-500 dark:text-primary-400 mr-2" /> : <Sun className="h-5 w-5 text-primary-500 dark:text-primary-400 mr-2" />}
                  Dark Mode
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Switch between light and dark themes
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="screenReader"
                name="screenReader"
                checked={preferences.screenReader}
                onChange={handleChange}
                className="form-checkbox"
              />
              <div className="ml-3">
                <label htmlFor="screenReader" className="form-label flex items-center">
                  <Volume2 className="h-5 w-5 text-primary-500 dark:text-primary-400 mr-2" />
                  Screen Reader Optimization
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enhance compatibility with screen readers
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="captionsEnabled"
                name="captionsEnabled"
                checked={preferences.captionsEnabled}
                onChange={handleChange}
                className="form-checkbox"
              />
              <div className="ml-3">
                <label htmlFor="captionsEnabled" className="form-label flex items-center">
                  <MonitorPlay className="h-5 w-5 text-primary-500 dark:text-primary-400 mr-2" />
                  Enable Captions
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Show captions for video and audio content
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="keyboardNavigation"
                name="keyboardNavigation"
                checked={preferences.keyboardNavigation}
                onChange={handleChange}
                className="form-checkbox"
              />
              <div className="ml-3">
                <label htmlFor="keyboardNavigation" className="form-label flex items-center">
                  <Keyboard className="h-5 w-5 text-primary-500 dark:text-primary-400 mr-2" />
                  Enhanced Keyboard Navigation
                </label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Improved focus indicators and shortcuts
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={resetPreferences}
            className="btn btn-outline"
            aria-label="Reset all accessibility settings to default"
          >
            Reset to Default
          </button>
          <button
            onClick={onClose}
            className="btn btn-primary"
            aria-label="Save accessibility settings"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityPanel;