(global-set-key (kbd "<f5>") 'eval-buffer);更新.emacs
(global-set-key (kbd "<f6>") 'uncomment-region);区域反注释
(global-set-key (kbd "<f7>") 'replace-string);单文本替换
(global-set-key (kbd "<f8>") 'dired);目录替换
(global-set-key (kbd "<f9>") 'set-mark-command);标记
(global-set-key (kbd "<f10>") 'moccur-grep-find);多文件搜索
;(global-set-key (kbd "<f11>") 'ediff-files);比较
(global-set-key (kbd "<f12>") 'delete-trailing-whitespace);删除行尾空格
(global-set-key [(control tab)] 'tabbar-forward);切换标签向前
(global-set-key [(control shift tab)] 'tabbar-backward);向后
(global-set-key (kbd "C-x a") 'calendar);日历
(global-set-key (kbd "C-x s") 'bc-set);设置bookmark
(global-set-key (kbd "C-x p") 'bc-previous);上一个bookmark
(global-set-key (kbd "C-x n") 'bc-next);下一个
(global-set-key (kbd "C-x l") 'bc-list)
(global-set-key (kbd "C-x c") 'bc-clear);清除bookmark
(global-set-key (kbd "C-c o") 'occur)

(fset 'pr
   [?e ?c ?h ?o ?  ?\" ?\" ?\C-b ?< ?> ?\C-b ?p ?r ?e ?\C-e ?\; return ?p ?r ?i ?n ?t ?_ ?r ?\( ?\) ?\C-b ?\C-e ?\; return ?e ?x ?i ?t ?\; ?\C-p ?\C-e ?\C-b ?\C-b ?$])
(setq visible-bell t);取消bell
(setq inhibit-startup-message t);取消欢迎界面
(setq column-number-mode t);显示列数
(setq kill-ring-max 250);保存操作数
(setq scroll-margin 3
      scroll-conservatively 10000);使跳页不僵硬
;(mouse-avoidance-mode 'animate);光标移动到鼠标，鼠标自动移开
(fset 'yes-or-no-p 'y-or-n-p)
(tool-bar-mode nil);隐藏工具栏
(setq indent-tabs-mode nil)
(setq-default tab-width 4)
(setq frame-title-format
            '("emacs@ " (buffer-file-name "%f "
                (dired-directory dired-directory "%b"))))
(setq default-frame-alist '((height . 40) (width . 100)))
(prefer-coding-system       'utf-8)
(set-default-coding-systems 'utf-8)
(global-linum-mode t)
(setq-default case-fold-search nil)
(setq backup-directory-alist (quote (("." . "D:/emacs/backup"))));设置~文件目录

(load "hideshow")
(defun toggle-selective-display (column)
  (interactive "P")
  (set-selective-display
   (or column
       (unless selective-display
         (1+ (current-column))))))
(defun toggle-hiding (column)
  (interactive "P")
  (if hs-minor-mode
      (if (condition-case nil
              (hs-toggle-hiding)
            (error t))
          (hs-show-all))
    (toggle-selective-display column)))

(global-set-key (kbd "C-+") 'toggle-hiding)
(global-set-key (kbd "C-\\") 'toggle-selective-display)

(add-hook 'c-mode-hook 'hs-minor-mode)
(add-hook 'c++-mode-hook 'hs-minor-mode)
(add-hook 'java-mode-hook 'hs-minor-mode)
(add-hook 'javascript-mode-hook 'hs-minor-mode)
(add-hook 'php-mode-hook 'hs-minor-mode)
(add-hook 'emacs-list-mode-hook 'hs-minor-mode)

;expand
(require 'cl)
(add-to-list 'load-path "D:/emacs/emacs_expand")

;(require 'ediff+)

;(require 'bookmark+)

(require 'color-moccur)
(require 'moccur-edit)
(require 'breadcrumb)
(require 'tabbar)
(tabbar-mode t)

(add-to-list 'load-path "D:/emacs/emacs_expand/color-theme-6.6.0")
(require 'color-theme)
(color-theme-initialize)
(color-theme-arjen)

(require 'php-mode)
(setq c-basic-offset 4)
(setq indent-tabs-mode nil)

(setq-default ispell-program-name "D:/emacs/emacs_expand/aspell/bin/aspell.exe")
(setq text-mode-hook '(lambda() (flyspell-mode t) ))

(add-to-list 'load-path  "D:/emacs/emacs_expand/cc-mode")
(require 'cc-mode)

(add-to-list 'load-path "D:/emacs/emacs_expand/session/lisp")
(require 'session)
(add-hook 'after-init-hook
          'session-initialize)

;undefined function
(defun remove-dos-eol ()
  "Do not show ^M in files containing mixed UNIX and DOS line endings."
  (interactive)
  (setq buffer-display-table (make-display-table))
  (aset buffer-display-table ?\^M []))
(custom-set-variables
  ;; custom-set-variables was added by Custom.
  ;; If you edit it by hand, you could mess it up, so be careful.
  ;; Your init file should contain only one such instance.
  ;; If there is more than one, they won't work right.
 '(bmkp-last-as-first-bookmark-file "~\\.emacs.bmk")
 '(session-use-package t nil (session)))

(display-time)
(show-paren-mode t)